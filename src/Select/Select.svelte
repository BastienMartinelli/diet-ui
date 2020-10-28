<script context="module" lang="ts">
  export type Option = {
    label: string;
    value: string;
  };
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Field from "../Field";
  import type { Status } from "../Field/Field.svelte";
  import Menu from "../Menu";
  import MenuItem from "../Menu/MenuItem.svelte";
  import Dropdown from "../Dropdown";
  import createId from "../utils/createId";

  const dispatch = createEventDispatcher();

  export let value: Option = null;
  export let options: Option[] = [];
  export let native = false;

  export let label = "";
  export let id = createId();
  export let message = "";
  export let skeleton = false;
  export let status: Status = "default";
  export let gutter = false;

  let open = false;

  $: valueLabel = value?.label || "";

  let fieldContainerEl: HTMLDivElement = null;

  $: width = fieldContainerEl?.getBoundingClientRect().width || 0;
</script>

<style>
  .select-button {
    background-color: transparent;
    height: 32px;
    flex-grow: 1;
    min-width: 100%;
    text-align: start;
  }

  .select-button:focus {
    outline: none;
  }
</style>

<Field
  bind:label
  bind:status
  bind:id
  bind:message
  bind:skeleton
  bind:gutter
  bind:containerEl={fieldContainerEl}>
  <span slot="before">
    <slot name="before" />
  </span>
  {#if native}
    <select {...$$restProps} bind:value on:change on:blur on:focus on:click>
      {#each options as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
  {/if}
  {#if !native}
    <button
      class="select-button"
      on:click={() => (open = !open)}>{valueLabel}</button>
  {/if}
  <span slot="after">
    <slot name="after" />
  </span>
</Field>
<Dropdown
  open={open && !native}
  on:close={() => (open = false)}
  bind:triggerEl={fieldContainerEl}>
  <Menu separator style={`width: ${width}px`}>
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
