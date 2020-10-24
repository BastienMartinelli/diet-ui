<script>
  import Button from "../Button";
  import Tooltip from "./Tooltip.svelte";
</script>

<style>
  .tooltip-example-container {
    display: "flex";
    flex-direction: column;
  }

  .tooltip-example-container > :global(*) {
    margin-top: 12px;
  }

  .custom-tooltip {
    padding: 12px;
    border: solid 2px var(--primary);
    background-color: var(--primary-light);
    color: var(--white);
  }
</style>

<div class="tooltip-example-container">
  <Tooltip content="tooltip content">
    <Button>button</Button>
  </Tooltip>

  <Tooltip
    content="This seems to be a really really long text as a tooltip for this button that is pretty small in comparison don't you think ?">
    <Button>button</Button>
  </Tooltip>

  <Tooltip>
    <Button>button</Button>
    <div slot="content" class="custom-tooltip">custom content</div>
  </Tooltip>
</div>
