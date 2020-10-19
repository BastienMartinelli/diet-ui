<script lang="ts">
  import createId from "../utils/createId";

  export let placeholder = "";
  export let id = createId();
  export let label = "";
  export let type = "text";
  export let error = false;
  export let message = "";
  export let skeleton = false;

  let hasFocus = false;

  function handleFocus(e) {
    hasFocus = true;
  }

  function handleBlur(e) {
    hasFocus = false;
  }
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
    color: var(--grey-dark);
  }

  .root.hasFocus > label {
    color: var(--primary);
  }

  .root.error > label {
    color: var(--error);
  }

  .container {
    display: flex;
    align-items: center;
    border-radius: 4px;
    transition: all 200ms;
    border: solid 1px var(--grey);
    box-shadow: var(--grey) 0px 1px 2px inset;
  }

  .root.error > .container {
    border: 1px solid var(--error-light);
    background-color: var(--error-xlight);
  }

  .root.hasFocus > .container {
    border-color: var(--primary);
    box-shadow: var(--grey) 0px 1px 2px inset, var(--primary-light) 0 0 0 3px;
  }

  .root.error.hasFocus > .container {
    border-color: var(--error);
    box-shadow: var(--grey) 0px 1px 2px inset, var(--error-light) 0 0 0 3px;
  }

  .root.error > .message {
    color: var(--error);
  }

  .message {
    color: var(--grey-dark);
    margin-top: 4px;
    font-size: 14px;
  }

  div.skeleton-input {
    height: 32px;
  }
</style>

<div class="root" class:error class:hasFocus>
  {#if label}<label class:skeleton for={id}>{label}</label>{/if}
  {#if !skeleton}
    <div class="container">
      <input
        {id}
        {type}
        {placeholder}
        on:blur={handleBlur}
        on:focus={handleFocus} />
    </div>
  {/if}
  {#if skeleton}
    <div class="skeleton-input" class:skeleton />
  {/if}
  {#if message}
    <div class:skeleton class="message">{message}</div>
  {/if}
</div>
