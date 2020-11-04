<script lang="ts">
  import Loader from "../Loader/Loader.svelte";

  type Variants = "filled" | "light" | "outlined";

  type Colors =
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "success"
    | "none";

  export let skeleton = false;
  export let loading = false;
  export let rounded = false;
  export let block = false;
  export let variant: Variants = "filled";
  export let icon = false;
  export let disabled = false;
  export let tabindex = null;
  export let color: Colors = "primary";
  export let ref: HTMLButtonElement = null;

  const tabIndex = disabled || skeleton ? -1 : tabindex;
</script>

<style>
  .btn {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin-bottom: 0;
    padding: 0;
    padding-left: 16px;
    padding-right: 16px;
    white-space: nowrap;
    text-align: center;
    letter-spacing: 0.46px;
    font-size: 13px;
    text-transform: uppercase;
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    touch-action: manipulation;
    cursor: pointer;
    color: var(--btn-text);
    transition: all 200ms;
    background-color: var(--btn-primary);
  }

  .btn:hover {
    box-shadow: 0 0 0 1px var(--btn-primary), 0px 7px 64px rgba(0, 0, 0, 0.05);
  }

  .btn:focus {
    outline: none;
    z-index: 1;
    box-shadow: var(--outline) 0 0 0 3px, 0px 7px 64px rgba(0, 0, 0, 0.07) !important;
  }

  .btn:active {
    background-color: var(--btn-primary-dark);
    box-shadow: var(--btn-primary-light) 0 0 0 4px;
  }

  .btn.primary {
    --btn-primary: var(--primary);
    --btn-primary-light: var(--primary-light);
    --btn-primary-dark: var(--primary-dark);
    --btn-primary-xlight: var(--primary-xlight);
    --btn-contrast-text: var(--primary-contrast);
  }

  .btn.error {
    --btn-primary: var(--error);
    --btn-primary-light: var(--error-light);
    --btn-primary-dark: var(--error-dark);
    --btn-primary-xlight: var(--error-xlight);
    --btn-contrast-text: var(--error-contrast);
  }

  .btn.success {
    --btn-primary: var(--success);
    --btn-primary-light: var(--success-light);
    --btn-primary-dark: var(--success-dark);
    --btn-primary-xlight: var(--success-xlight);
    --btn-contrast-text: var(--success-contrast);
  }

  .btn.warning {
    --btn-primary: var(--warning);
    --btn-primary-light: var(--warning-light);
    --btn-primary-dark: var(--warning-dark);
    --btn-primary-xlight: var(--warning-xlight);
    --btn-contrast-text: var(--warning-contrast);
  }

  .btn.secondary {
    --btn-primary: var(--secondary);
    --btn-primary-light: var(--secondary-light);
    --btn-primary-dark: var(--secondary-dark);
    --btn-primary-xlight: var(--secondary-xlight);
    --btn-contrast-text: var(--secondary-contrast);
  }

  .btn.none {
    --btn-primary: var(--grey);
    --btn-primary-light: var(--grey-light);
    --btn-primary-dark: var(--grey-dark);
    --btn-primary-xlight: var(--grey-xlight);
    --btn-contrast-text: var(--grey-contrast);
  }

  .btn.filled {
    text-shadow: 0px 0px 2px var(--btn-primary-dark);
    box-shadow: 0 0 0 1px var(--btn-primary-dark);
    --btn-text: var(--btn-contrast-text);
  }

  .btn.outlined {
    box-shadow: 0 0 0 1px var(--btn-primary);
    background-color: transparent;
    --btn-text: var(--btn-primary);
  }

  .btn.outlined:active {
    background-color: var(--btn-primary-xlight);
  }

  .light {
    box-shadow: 0 0 0 1px transparent;
    --btn-text: var(--btn-primary);
    background-color: transparent;
  }

  .btn.light:focus {
    background-color: transparent;
    outline: none;
    z-index: 1;
  }

  .btn.light:active {
    background-color: var(--btn-primary-xlight);
    outline: none;
    box-shadow: var(--btn-primary-light) 0 0 0 4px;
    z-index: 1;
  }

  .btn[aria-disabled="true"] {
    color: var(--grey-contrast) !important;
    background-color: var(--grey) !important;
    box-shadow: none;
    pointer-events: none;
    text-shadow: none;
  }

  .btn.loading {
    color: transparent;
    text-shadow: none !important;
    color: transparent !important;
  }

  .skeleton {
    box-shadow: none;
  }

  .btn.with-before {
    padding-left: 8px;
  }

  .before-el {
    margin-right: 12px;
  }

  .btn.with-after {
    padding-right: 8px;
  }

  .after-el {
    margin-left: 12px;
  }

  .rounded {
    border-radius: 32px;
  }

  .btn.icon {
    padding: 0px;
    min-width: 32px;
  }

  .loader-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader-container > :global(* > *) {
    fill: var(--btn-text) !important;
  }

  .block {
    width: 100%;
  }
</style>

<button
  bind:this={ref}
  {...$$restProps}
  class="btn {$$props.class} {variant} {color}"
  class:skeleton
  class:loading
  class:rounded
  class:block
  class:with-before={!!$$slots.before}
  class:with-after={!!$$slots.after}
  class:icon
  tabindex={tabIndex}
  aria-disabled={disabled}
  on:click
  on:blur>
  {#if loading}
    <div class="loader-container">
      <Loader height="24px" />
    </div>
  {/if}

  {#if $$slots.before}
    <span class="before-el">
      <slot name="before" />
    </span>
  {/if}

  <slot>button</slot>

  {#if $$slots.after}
    <span class="after-el">
      <slot name="after" />
    </span>
  {/if}
</button>
