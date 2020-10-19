<script>
  import { Field, Box, Button } from "../";
</script>

<style>
  form {
    max-width: 400px;
  }

  :global(.form-box > *:not(:first-child)) {
    margin-top: 16px;
  }
</style>

<form on:submit|preventDefault={() => {}}>
  <Box class="form-box" padding shadow>
    <Field label="Name" />
    <Field label="Password" type="password" />
    <Field label="With message" message="That's my message" type="password" />
    <Field label="In error" status="error" message="message in error" />
    <Field label="Warning" status="warning" message="warning message" />
    <Field label="Success" status="success" message="success message" />
    <Field skeleton label="skeleton" message="with a message" />
    <Button>submit</Button>
  </Box>
</form>
