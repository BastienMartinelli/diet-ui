<script context="module" lang="ts">
  export type Status = "default" | "error" | "success" | "warning";
</script>

<script lang="ts">
  import createId from "../utils/createId";

  export let id = createId();
  export let label = "";
  export let message = "";
  export let skeleton = false;
  export let status: Status = "default";
  export let gutter = false;
  export let containerEl = null;
</script>

<style>
  .container {
    min-height: 32px;
    width: 100%;
  }

  .container > :global(input),
  .container > :global(select),
  .container > :global(button) {
    box-sizing: border-box;
    appearance: none;
    background: transparent;
    border: none;
    min-height: 100%;
    padding: 0;
    width: 100%;
  }

  .container > :global(*:focus) {
    outline: none;
  }

  .input::-ms-clear {
    display: none;
  }

  label {
    display: inline-block;
    margin-bottom: 4px;
    color: var(--field-label);
    transition: color 200ms;
  }

  .default {
    --field-label: var(--black);
    --field-focus-label: var(--outline);
    --field-border: var(--grey);
    --field-light: var(--outline);
  }

  .error {
    --field-label: var(--error);
    --field-focus-label: var(--error);
    --field-border: var(--error);
    --field-light: var(--error-light);
  }

  .warning {
    --field-label: var(--warning);
    --field-focus-label: var(--warning);
    --field-border: var(--warning);
    --field-light: var(--warning-light);
  }

  .success {
    --field-label: var(--success);
    --field-focus-label: var(--success);
    --field-border: var(--success);
    --field-light: var(--success-light);
  }

  .container {
    display: flex;
    align-items: center;
    border-radius: 4px;
    transition: all 200ms;
    border: solid 1px var(--field-border);
  }

  .container:hover {
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.1);
  }

  .container:focus-within {
    border-color: var(--field-focus-label);
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07), var(--grey) 0px 1px 2px inset,
      var(--field-light) 0 0 0 2px;
  }

  .root:focus-within > label {
    color: var(--field-focus-label);
  }

  .message {
    color: var(--field-label);
    margin-top: 4px;
    font-size: 14px;
  }

  div.skeleton-input {
    height: 32px;
  }

  .before-el > :global(*),
  .after-el > :global(*) {
    color: var(--field-label);
    margin-left: 8px;
    margin-right: 8px;
  }

  .gutter {
    margin-bottom: 12px;
  }
</style>

<div
  {...$$restProps}
  class="root {status} {$$restProps.class}"
  class:gutter
  bind:this={containerEl}>
  {#if label}<label class:skeleton for={id}>{label}</label>{/if}
  {#if !skeleton}
    <div class="container">
      <span class="before-el">
        <slot name="before" />
      </span>
      <slot />
      <span class="after-el">
        <slot name="after" />
      </span>
    </div>
  {/if}
  {#if skeleton}
    <div class="skeleton-input" class:skeleton />
  {/if}
  {#if message}
    <div class:skeleton class="message">{message}</div>
  {/if}
</div>
