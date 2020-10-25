<script lang="ts">
  import Select, { Option } from "./Select.svelte";

  const options: Option[] = [
    { value: "DMB", label: "Dimebag Darell" },
    { value: "PHI", label: "Phil Anselmo" },
    { value: "REX", label: "Rex Brown" },
    { value: "VIN", label: "Vinnie Paul" },
  ];

  let value = "VIN";
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
    <Select bind:value label="Name" {options} />
    <Select
      bind:value
      label="In error"
      status="error"
      message="message in error"
      {options} />
    <Select
      bind:value
      label="Warning"
      status="warning"
      message="warning message"
      {options} />
    <Select
      bind:value
      label="Success"
      status="success"
      message="success message"
      {options} />
    <Select
      bind:value
      skeleton
      label="skeleton"
      message="with a message"
      {options} />
    <Select
      bind:value
      label="With elements"
      message="slots before and after"
      {options}>
      <i slot="before" class="fas fa-star" />
      <i slot="after" class="fas fa-star" />
    </Select>
  </div>
</form>
