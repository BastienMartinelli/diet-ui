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
    box-shadow: var(--grey) 0px 1px 2px inset;
  }

  .root:focus-within > .container {
    border-color: var(--field-focus-label);
    box-shadow: var(--grey) 0px 1px 2px inset, var(--field-light) 0 0 0 3px;
  }

  .message {
    color: var(--field-label);
    margin-top: 4px;
    font-size: 14px;
  }

  div.skeleton-input {
    height: 32px;
  }
</style>

<div
  class="root"
  class:error={status === 'error'}
  class:warning={status === 'warning'}
  class:success={status === 'success'}
  class:default={status === 'default'}>
  {#if label}<label class:skeleton for={id}>{label}</label>{/if}
  {#if !skeleton}
    <div class="container">
      <input {id} {type} {placeholder} on:blur on:focus on:change />
    </div>
  {/if}
  {#if skeleton}
    <div class="skeleton-input" class:skeleton />
  {/if}
  {#if message}
    <div class:skeleton class="message">{message}</div>
  {/if}
</div>
