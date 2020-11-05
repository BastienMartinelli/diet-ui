<script context="module" lang="ts">
  export type Option = { value: string; label: string };
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../Button";
  import Dropdown from "../Dropdown/Dropdown.svelte";
  import Menu from "../Menu/Menu.svelte";
  import MenuItem from "../Menu/MenuItem.svelte";
  import { attemptFocus, focusFirstDescendant } from "../utils/focusUtils";

  export let value: Option = null;
  export let options: Option[] = [];

  let open = false;
  let buttonEl = null;

  const dispatch = createEventDispatcher();

  function closeAndRefocus() {
    open = false;
    if (!attemptFocus(buttonEl)) {
      focusFirstDescendant(buttonEl);
    }
  }
</script>

<Button bind:ref={buttonEl} on:click={() => (open = !open)} {...$$restProps}>
  <slot />
</Button>
<Dropdown triggerEl={buttonEl} autofocus {open} on:close={() => (open = false)}>
  <Menu separator on:shift={closeAndRefocus}>
    {#each options as option}
      <MenuItem
        active={value ? option.value === value.value : false}
        on:click={() => {
          open = false;
          value = option;
          dispatch('change', option);
        }}
        on:keydown={(e) => {
          if (e.key === 'Enter') {
            open = false;
            value = option;
            dispatch('change', option);
          }
        }}>
        {option.label}
      </MenuItem>
    {/each}
  </Menu>
</Dropdown>
