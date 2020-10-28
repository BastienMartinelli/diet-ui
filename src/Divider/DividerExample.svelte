<script>
  import Box from "../Box";
  import Divider from "./Divider.svelte";
</script>

<style>
  :global(.box) {
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
<Box class="box" shadow column>
  <div class="el" />
  <Divider />
  <div class="el" />
</Box>

vertical
<Box class="box" shadow row>
  <div class="el" />
  <Divider vertical />
  <div class="el" />
</Box>

horizontal gutter
<Box class="box" shadow column>
  <div class="el" />
  <Divider gutter />
  <div class="el" />
</Box>

vertical gutter spacing 4
<Box class="box" shadow row>
  <div class="el" />
  <Divider vertical gutter spacing={4} />
  <div class="el" />
</Box>
