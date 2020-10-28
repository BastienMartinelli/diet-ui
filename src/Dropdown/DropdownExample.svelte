<script lang="ts">
  import Button from "../Button";
  import Menu from "../Menu/Menu.svelte";
  import MenuItem from "../Menu/MenuItem.svelte";
  import Dropdown from "./Dropdown.svelte";

  let open = false;
</script>

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

<Dropdown {open} on:close={() => (open = false)}>
  <span slot="trigger">
    <Button on:click={() => (open = !open)}>button</Button>
  </span>
  <Menu separator>
    <MenuItem>item 1</MenuItem>
    <MenuItem>item 2</MenuItem>
    <MenuItem>item 3</MenuItem>
  </Menu>
</Dropdown>
