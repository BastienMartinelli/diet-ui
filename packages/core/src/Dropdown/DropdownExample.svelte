<script lang="ts">
  import Box from "../Box";
  import Button from "../Button";
  import Checkbox from "../Checkbox/Checkbox.svelte";
  import Menu from "../Menu/Menu.svelte";
  import MenuItem from "../Menu/MenuItem.svelte";
  import Switch from "../Switch";
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
      <Checkbox label="Remember me" gutter />
      <Button variant="light" block>Submit</Button>
    </Box>
  </Dropdown>

  <Dropdown autofocus>
    <span slot="trigger">
      <Button>Notifications</Button>
    </span>
    <Box padding column>
      <Switch gutter label="User" />
      <Switch gutter label="Topic" />
      <Switch label="Event" />
    </Box>
  </Dropdown>
</Box>
