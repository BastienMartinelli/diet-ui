<script>
  import Box from "../Box";
  import Button from "../Button";
  import TextField from "../TextField";
  import Modal from "./Modal.svelte";

  let open = false;
</script>

<style>
  .footer {
    padding: 8px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .footer > :global(*) {
    margin-right: 8px;
  }
</style>

<Button on:click={() => (open = !open)}>open</Button>
<Modal on:close={() => (open = false)} bind:open>
  <div slot="header">
    <Box padding>Modal Title</Box>
  </div>
  <div slot="content">
    <Box padding>
      <TextField label="name" gutter />
      <TextField type="number" label="age" gutter />
    </Box>
  </div>
  <div slot="footer" class="footer">
    <Button on:click={() => (open = false)} variant="light">annuler</Button>
    <Button>confirmer</Button>
  </div>
</Modal>
