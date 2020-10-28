<script lang="ts">
  export let shadow = false;
  export let border = false;
  export let padding = false;
  export let flex = false;
  export let grow = false;
  export let direction: "row" | "column" = "row";
  export let stack = false;
  export let rounded = false;
  export let fullwidth = false;
  export let fullheight = false;
  export let row = false;
  export let column = false;
  export let spacing: 0 | 1 | 2 | 3 | 4 = 1;
  export let ref: HTMLDivElement = null;
</script>

<style>
  .box {
    background-color: var(--white);
  }

  .box.border {
    border: 1px solid var(--grey);
  }

  .box.shadow {
    box-shadow: 0 0.25rem 1rem var(--grey);
  }

  .box.padding {
    padding: 12px;
  }

  .box.flex {
    display: flex;
  }

  .box.grow {
    flex-grow: 1;
  }

  .box.row {
    flex-direction: row;
  }

  .box.column {
    flex-direction: column;
  }

  .box.row-reverse {
    flex-direction: row-reverse;
  }

  .box.column-reverse {
    flex-direction: row-reverse;
  }

  .box.stack.row {
    display: flex;
    margin-left: -var(--box-spacing);
  }

  .box.stack.column {
    margin-top: -var(--box-spacing);
  }

  .box.stack.row > :global(*) {
    margin-left: var(--box-spacing);
  }

  .box.stack.column > :global(*) {
    margin-top: var(--box-spacing);
  }

  .box.rounded {
    border-radius: var(--border-radius);
    padding: 6px 0 6px 0;
  }

  .fullwidth {
    width: 100%;
  }

  .fullheight {
    height: 100%;
  }

  .row {
    flex-direction: row;
  }

  .box.column {
    flex-direction: column;
  }

  .spacing-0 {
    --box-spacing: 0px;
  }

  .spacing-1 {
    --box-spacing: 4px;
  }

  .spacing-2 {
    --box-spacing: 8px;
  }

  .spacing-3 {
    --box-spacing: 12px;
  }

  .spacing-4 {
    --box-spacing: 16px;
  }
</style>

<div
  bind:this={ref}
  class="box {$$props.class || ''} {`spacing-${spacing}`}"
  class:shadow
  class:border
  class:padding
  class:grow
  class:flex
  class:direction
  class:stack
  class:rounded
  class:fullwidth
  class:fullheight
  class:column
  class:row>
  <slot />
</div>
