<script>
  import TextField from "./TextField.svelte";

  let value = "test";
</script>

<style>
  form {
    max-width: 400px;
  }

  .form-box > :global(*:not(:first-child)) {
    margin-top: 16px;
  }
</style>

<form on:submit|preventDefault={() => {}}>
  <div class="form-box">
    <TextField bind:value label="Name" />
    <TextField bind:value label="Password" type="password" />
    <TextField
      bind:value
      label="With message"
      message="That's my message"
      type="password" />
    <TextField
      bind:value
      label="In error"
      status="error"
      message="message in error" />
    <TextField
      bind:value
      label="Warning"
      status="warning"
      message="warning message" />
    <TextField
      bind:value
      label="Success"
      status="success"
      message="success message" />
    <TextField bind:value skeleton label="skeleton" message="with a message" />
    <TextField
      bind:value
      label="With elements"
      message="slots before and after">
      <i slot="before" class="fas fa-star" />
      <i slot="after" class="fas fa-star" />
    </TextField>
  </div>
</form>
