<script context="module" lang="ts">
  export type Option = { value: string; label: string };
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../Button";
  import Dropdown from "../Dropdown/Dropdown.svelte";
  import Menu from "../Menu/Menu.svelte";
  import MenuItem from "../Menu/MenuItem.svelte";

  export let value: Option = null;
  export let options: Option[] = [];

  let open = false;
  let menuEl = null;

  const dispatch = createEventDispatcher();
</script>

<Dropdown {open} on:close={() => (open = false)}>
  <span slot="trigger">
    <Button on:click={() => (open = !open)} {...$$restProps}>
      <slot />
    </Button>
  </span>
  <Menu separator bind:this={menuEl}>
    {#each options as option}
      <MenuItem
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
