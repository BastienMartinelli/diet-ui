<script lang="ts">
  import { fade } from "svelte/transition";

  export let checked = false;
  export let label = "";
  export let ref: HTMLInputElement;
  export let gutter = false;
  export let disabled = false;
  export let skeleton = false;
</script>

<style>
  .checkbox {
    position: relative;
    display: flex;
    height: 24px;
    align-items: center;
    margin: 4px 2px 4px 2px;
  }

  .checkbox-skeleton {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
  }

  .checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .check-box {
    position: absolute;
    cursor: pointer;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--white);
    transition: 200ms;
    border: solid 1px var(--grey);
    border-radius: 4px;
  }

  input:checked + .check-box {
    border-color: var(--primary);
    background-color: var(--primary);
    box-shadow: transparent 0px 1px 2px inset;
  }

  input:focus + .check-box {
    box-shadow: var(--grey) 0px 1px 2px inset, var(--outline) 0 0 0 3px,
      0px 7px 64px rgba(0, 0, 0, 0.07);
  }

  input:checked:focus + .check-box {
    box-shadow: transparent 0px 1px 2px inset, var(--outline) 0 0 0 3px,
      0px 7px 64px rgba(0, 0, 0, 0.07);
  }

  input:disabled + .check-box {
    background-color: var(--grey);
    border-color: var(--grey);
  }

  .checkbox-label {
    margin-left: 28px;
  }

  .gutter {
    margin-bottom: 16px;
  }

  svg {
    position: absolute;
    z-index: 0;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
  }

  path {
    stroke: white;
    stroke-width: 3px;
  }
</style>

<label class="checkbox {$$restProps.class}" class:gutter>
  <input
    class:skeleton
    {disabled}
    type="checkbox"
    bind:checked
    bind:this={ref}
    on:change
    on:blur
    on:focus
    {...$$restProps}
    aria-disabled={disabled} />
  {#if !skeleton}
    <span class="check-box">
      {#if checked}
        <svg viewBox="0 0 24 24" transition:fade={{ duration: 100 }}>
          <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
      {/if}
    </span>
  {/if}
  {#if skeleton}<span class="checkbox-skeleton" class:skeleton />{/if}
  <span class:skeleton class="checkbox-label">{label}</span>
</label>
