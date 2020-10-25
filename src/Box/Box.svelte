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

  .box.stack {
    display: flex;
    align-items: center;
    margin-left: -8px;
  }

  :global(.box.stack > *) {
    margin-left: 8px;
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
</style>

<div
  class="box {$$props.class}"
  class:shadow
  class:border
  class:padding
  class:grow
  class:flex
  class:direction
  class:stack
  class:rounded
  class:fullwidth
  class:fullheight>
  <slot />
</div>
