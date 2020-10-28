<script lang="ts">
  import Box from "../Box";
  import Button from "../Button";
  import Menu from "../Menu/Menu.svelte";
  import MenuItem from "../Menu/MenuItem.svelte";
  import TextField from "../TextField";
  import Dropdown from "./Dropdown.svelte";

  let open = false;
</script>

<Box stack row>
  <Dropdown>
    <span slot="trigger">
      <Button>button</Button>
    </span>
    <Menu separator>
      <MenuItem>item 1</MenuItem>
      <MenuItem>item 2</MenuItem>
      <MenuItem>item 3</MenuItem>
    </Menu>
  </Dropdown>

  <Dropdown {open} on:close={() => (open = false)} autofocus>
    <span slot="trigger">
      <Button on:click={() => (open = !open)}>button</Button>
    </span>
    <Box padding column>
      <TextField label="Name" gutter />
      <TextField label="Reason" gutter />
      <Button variant="light" block>Submit</Button>
    </Box>
  </Dropdown>
</Box>
