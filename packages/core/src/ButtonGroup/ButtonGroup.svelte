<script lang="ts">
  export let direction: "horizontal" | "vertical" = "horizontal";
</script>

<style>
  .button-group.horizontal {
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
  }

  .button-group.vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.button-group > :global(button.btn) {
    border-radius: 0px;
  }

  div.button-group.horizontal > :global(button.btn:not(:first-child)) {
    margin-left: 1px;
  }

  div.button-group.vertical > :global(button.btn:not(:first-child)) {
    margin-top: 1px;
  }

  div.button-group.horizontal > :global(button.btn:first-child) {
    border-radius: 8px 0px 0px 8px;
  }

  div.button-group.horizontal > :global(button.btn:last-child) {
    border-radius: 0px 8px 8px 0px;
  }

  div.button-group.vertical > :global(button.btn:first-child) {
    border-radius: 8px 8px 0px 0px;
  }

  div.button-group.vertical > :global(button.btn:last-child) {
    border-radius: 0px 0px 8px 8px;
  }
</style>

<div
  class="button-group"
  class:horizontal={direction === 'horizontal'}
  class:vertical={direction === 'vertical'}>
  <slot />
</div>
