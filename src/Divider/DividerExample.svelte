<script>
  import Box from "../Box";
  import Divider from "./Divider.svelte";
</script>

<style>
  :global(.divider-box) {
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el {
    background-color: tomato;
    height: 50px;
    width: 50px;
  }
</style>

horizontal
<Box class="divider-box" shadow column>
  <div class="el" />
  <Divider />
  <div class="el" />
</Box>

vertical
<Box class="divider-box" shadow row>
  <div class="el" />
  <Divider vertical />
  <div class="el" />
</Box>

horizontal gutter
<Box class="divider-box" shadow column>
  <div class="el" />
  <Divider gutter />
  <div class="el" />
</Box>

vertical gutter spacing 4
<Box class="divider-box" shadow row>
  <div class="el" />
  <Divider vertical gutter spacing={4} />
  <div class="el" />
</Box>
