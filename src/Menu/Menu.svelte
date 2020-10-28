<script lang="ts">
  export let separator = false;
  let containerEl: HTMLDivElement = null;
</script>

<style>
  .separator > :global(*):not(:first-child) {
    border-top: solid 1px var(--grey-light);
  }
</style>

<div
  {...$$restProps}
  class={$$restProps.class}
  class:separator
  bind:this={containerEl}>
  <slot />
</div>
