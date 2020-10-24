<script>
  import Button from "../Button";
  import Drawer from "./Drawer.svelte";

  let openLeft = false;
  let openRight = false;
  let openTop = false;
  let openBottom = false;
  let openA11y = false;
</script>

<style>
  div.button-container > :global(button) {
    margin-top: 16px;
  }
</style>

<div class="button-container">
  <Button on:click={() => (openLeft = true)}>open drawer left</Button>
  <Button on:click={() => (openRight = true)}>open drawer right</Button>
  <Button on:click={() => (openTop = true)}>open drawer top</Button>
  <Button on:click={() => (openBottom = true)}>open drawer bottom</Button>

  <Drawer
    bind:open={openA11y}
    on:close={() => (openA11y = false)}
    position="left">
    <div slot="trigger">
      <Button color="success" on:click={() => (openA11y = true)}>
        open accessible drawer
      </Button>
    </div>
    <div>accessibility drawer</div>
    <Button>autocused</Button>
  </Drawer>
</div>

<Drawer
  bind:open={openLeft}
  on:close={() => (openLeft = false)}
  position="left">
  left
</Drawer>
<Drawer
  bind:open={openRight}
  on:close={() => (openRight = false)}
  position="right">
  right
</Drawer>
<Drawer bind:open={openTop} on:close={() => (openTop = false)} position="top">
  top
</Drawer>
<Drawer
  bind:open={openBottom}
  on:close={() => (openBottom = false)}
  position="bottom">
  bottom
  <Button>autocused</Button>
</Drawer>
