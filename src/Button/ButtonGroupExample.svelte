<script lang="ts">
  import { ButtonGroup, Button } from "../";
</script>

<style>
  :global(div.button-example-container > *) {
    margin-top: 12px;
  }
</style>

<div class="button-example-container">
  <ButtonGroup>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
    <Button>Action 3</Button>
  </ButtonGroup>

  <Button skeleton>test</Button>

  <Button>test</Button>

  <Button loading>test</Button>
</div>
