<script>
  import Loader from "../Loader/Loader.svelte";

  export let skeleton = false;
  export let loading = false;
</script>

<style>
  .btn {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin-bottom: 0;
    padding: 0 16px;
    white-space: nowrap;
    text-align: center;
    letter-spacing: 0.46px;
    font-size: 13px;
    text-transform: uppercase;
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    touch-action: manipulation;
    cursor: pointer;
    background-color: var(--primary);
    color: var(--text-contrast);
    transition: all 200ms;
  }

  .btn:focus {
    outline: none;
    box-shadow: var(--primary-light) 0 0 0 3px;
  }

  .btn:active {
    background-color: var(--primary-dark);
  }

  .btn.loading {
    color: transparent;
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
</style>

<button class:skeleton class:loading class="btn">
  {#if loading}
    <div class="loader-container">
      <Loader height="24px" />
    </div>
  {/if}
  <slot>button</slot>
</button>
