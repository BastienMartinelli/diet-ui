<script lang="ts">
  import createId from "../utils/createId";

  type Status = "default" | "error" | "success" | "warning";

  export let placeholder = "";
  export let id = createId();
  export let label = "";
  export let type = "text";
  export let message = "";
  export let skeleton = false;
  export let status: Status = "default";
  export let gutter = false;
</script>

<style>
  input {
    box-sizing: border-box;
    appearance: none;
    flex-grow: 1;
    background: transparent;
    border: none;
    height: 32px;
    padding: 0 8px;
  }

  input:focus {
    outline: none;
  }

  input::-ms-clear {
    display: none;
  }

  label {
    display: inline-block;
    margin-bottom: 4px;
    color: var(--field-label);
  }

  .default {
    --field-label: var(--grey-dark);
    --field-focus-label: var(--primary);
    --field-border: var(--grey);
    --field-light: var(--primary-light);
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
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.05);
  }

  .container:focus-within {
    border-color: var(--field-focus-label);
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07), var(--grey) 0px 1px 2px inset,
      var(--field-light) 0 0 0 3px;
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

  .before-el {
    color: var(--field-label);
    margin-left: 8px;
  }

  .after-el {
    color: var(--field-label);
    margin-right: 8px;
  }

  .gutter {
    margin-bottom: 12px;
  }
</style>

<div class="root {status}" class:gutter>
  {#if label}<label class:skeleton for={id}>{label}</label>{/if}
  {#if !skeleton}
    <div class="container">
      {#if $$slots.before}
        <span class="before-el">
          <slot name="before" />
        </span>
      {/if}
      <input {id} {type} {placeholder} on:blur on:focus on:change />
      {#if $$slots.after}
        <span class="after-el">
          <slot name="after" />
        </span>
      {/if}
    </div>
  {/if}
  {#if skeleton}
    <div class="skeleton-input" class:skeleton />
  {/if}
  {#if message}
    <div class:skeleton class="message">{message}</div>
  {/if}
</div>
