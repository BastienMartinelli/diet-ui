<script lang="ts">
  import { slide } from "svelte/transition";

  export let open = false;
  export let title = "";
</script>

<style>
  .header {
    padding-left: 12px;
    cursor: pointer;
    outline: none;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    text-transform: uppercase;
    background-color: transparent;
    transition: background-color 200ms, box-shadow 200ms;
    font-weight: bold;
  }

  .header:hover {
    background-color: var(--grey-light);
  }

  .header:focus {
    outline: none;
    z-index: 1;
    box-shadow: inset var(--outline) 0 0 0 2px;
  }

  .separator {
    flex-grow: 1;
  }

  .panel {
    padding: 12px;
  }

  .before-el {
    margin: 0 12px 0 4px;
  }

  .after-el {
    margin: 0 12px 0 12px;
  }
</style>

{#if title}
  <button class="header" on:click>
    {#if $$slots.before}
      <span class="before-el">
        <slot name="before" />
      </span>
    {/if}
    {title}
    <div class="separator" />
    {#if $$slots.after}
      <span class="after-el">
        <slot name="after" />
      </span>
    {/if}
  </button>
{/if}
{#if open}
  <div transition:slide={{ duration: 200 }}>
    <slot />
    {#if $$slots.panel}
      <div class="panel">
        <slot name="panel" />
      </div>
    {/if}
  </div>
{/if}
