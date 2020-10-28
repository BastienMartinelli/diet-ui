<script lang="ts">
  import type { Option } from "../SelectNative/SelectNative.svelte";
  import SelectButton from "./SelectButton.svelte";

  let value: Option = null;

  const options: Option[] = [
    { value: "DMB", label: "Dimebag Darell" },
    { value: "PHI", label: "Phil Anselmo" },
    { value: "REX", label: "Rex Brown" },
    { value: "VIN", label: "Vinnie Paul" },
  ];

  const handleChange = (e) => {
    value = e.detail;
  };
</script>

<style>
  .select-button-container > :global(*) {
    margin-top: 12px;
  }
</style>

<div class="select-button-container">
  <SelectButton {value} {options} on:change={handleChange}>
    {value ? value.label : 'Choose one'}
  </SelectButton>

  <SelectButton
    {value}
    {options}
    variant="light"
    color="none"
    on:change={handleChange}>
    {value ? value.label : 'Choose one'}
  </SelectButton>

  <SelectButton
    {value}
    {options}
    label="Choose your god"
    icon
    rounded
    on:change={handleChange}>
    <i class="fas fa-star" />
  </SelectButton>
</div>
