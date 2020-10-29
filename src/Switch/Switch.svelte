<script lang="ts">
  export let checked = false;
  export let label = "";
  export let ref: HTMLInputElement;
</script>

<style>
  .switch {
    position: relative;
    display: flex;
    height: 24px;
    align-items: center;
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

  input:focus + .slider {
    box-shadow: var(--outline) 0 0 0 3px, 0px 7px 64px rgba(0, 0, 0, 0.07) !important;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .switch-label {
    margin-left: 58px;
  }
</style>

<label class="switch {$$restProps.class}">
  <input
    type="checkbox"
    bind:checked
    bind:this={ref}
    on:change
    on:blur
    on:focus />
  <span class="slider" />
  <span class="switch-label">{label}</span>
</label>
