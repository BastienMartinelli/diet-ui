<script>
  import { Field } from "../";
  import Button from "../Button";
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
    <Field label="Name" />
    <Field label="Password" type="password" />
    <Field label="With message" message="That's my message" type="password" />
    <Field label="In error" status="error" message="message in error" />
    <Field label="Warning" status="warning" message="warning message" />
    <Field label="Success" status="success" message="success message" />
    <Field skeleton label="skeleton" message="with a message" />
    <Field label="With elements" message="slots before and after">
      <i slot="before" class="fas fa-star" />
      <i slot="after" class="fas fa-star" />
    </Field>
  </div>
</form>
