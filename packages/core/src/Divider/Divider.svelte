<script lang="ts">
  export let vertical = false;
  export let gutter = false;
  export let spacing: 0 | 1 | 2 | 3 | 4 = 2;
</script>

<style>
  .divider {
    background-color: var(--grey);
    margin: 0;
  }

  .horizontal {
    width: 100%;
    height: 1px;
  }

  .vertical {
    height: 100%;
    width: 1px;
  }

  .horizontal.gutter {
    margin-top: var(--divider-spacing);
    margin-bottom: var(--divider-spacing);
  }

  .vertical.gutter {
    margin-left: var(--divider-spacing);
    margin-right: var(--divider-spacing);
  }

  .spacing-0 {
    --divider-spacing: 0px;
  }

  .spacing-1 {
    --divider-spacing: 4px;
  }

  .spacing-2 {
    --divider-spacing: 8px;
  }

  .spacing-3 {
    --divider-spacing: 12px;
  }

  .spacing-4 {
    --divider-spacing: 16px;
  }
</style>

<div
  role="separator"
  class="divider {`spacing-${spacing}`}"
  class:horizontal={!vertical}
  class:vertical
  class:gutter />
