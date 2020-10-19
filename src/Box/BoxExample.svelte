<script>
  import Button from "../Button";
  import Box from "./Box.svelte";
</script>

<style>
  :global(div.box-container > div) {
    margin-top: 16px;
  }
</style>

<div class="box-container">
  <Box padding>default padding box</Box>
  <Box border padding>border padding box</Box>
  <Box shadow padding>shadow padding box</Box>
  <Box border shadow padding>shadow border padding box</Box>
  <Box flex padding border>
    box flex padding border
    <Box grow />
    <Button>button</Button>
  </Box>
  <Box stack>
    <Button>button</Button>
    <Button>button</Button>
    <Button>button</Button>
  </Box>
</div>
