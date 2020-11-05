<script lang="ts">
  export let active = false;
</script>

<style>
  .item {
    display: flex;
    position: relative;
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
    border: 2px solid transparent;
    touch-action: manipulation;
    cursor: pointer;
    color: var(--btn-text);
    transition: all 200ms;
    background-color: var(--btn-primary);
    width: 100%;
    transition: background-color 200ms, box-shadow 200ms;
  }

  .item:hover {
    background-color: var(--grey-xlight);
  }

  .item:focus {
    outline: none;
    z-index: 1;
    box-shadow: var(--outline) 0 0 0 3px, 0px 7px 64px rgba(0, 0, 0, 0.07) !important;
  }

  .active {
    font-weight: bold;
  }
</style>

<button class="item" on:click on:focus on:blur on:keydown class:active>
  <slot />
</button>
