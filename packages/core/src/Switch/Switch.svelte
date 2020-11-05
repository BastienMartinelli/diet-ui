<script lang="ts">
  import Accordion from "../Accordion";

  export let checked = false;
  export let label = "";
  export let ref: HTMLInputElement;
  export let gutter = false;
  export let disabled = false;
  export let skeleton = false;
</script>

<style>
  .switch {
    position: relative;
    display: flex;
    height: 24px;
    align-items: center;
    margin: 2px 2px 2px 2px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    width: 50px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey-light);
    transition: 200ms;
    border-radius: 34px;
  }

  .skeleton-slider {
    position: absolute;
    cursor: pointer;
    width: 50px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3.2px;
    background-color: white;
    transition: 200ms;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input:checked + .slider {
    background-color: var(--primary);
  }

  input:disabled + .slider {
    background-color: var(--grey-light) !important;
  }

  input:focus + .slider {
    box-shadow: var(--outline) 0 0 0 3px, 0px 7px 64px rgba(0, 0, 0, 0.07) !important;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:disabled + .slider:before {
    background-color: var(--grey);
  }

  .switch-label {
    margin-left: 58px;
  }

  .gutter {
    margin-bottom: 12px;
  }
</style>

<label class="switch {$$restProps.class}" class:gutter>
  <input
    type="checkbox"
    bind:checked
    bind:this={ref}
    on:change
    on:blur
    on:focus
    disabled={disabled || skeleton}
    {...$$restProps} />
  {#if !skeleton}<span class="slider" />{/if}
  {#if skeleton}<span class="skeleton-slider" class:skeleton />{/if}
  <span class="switch-label" class:skeleton>{label}</span>
</label>
