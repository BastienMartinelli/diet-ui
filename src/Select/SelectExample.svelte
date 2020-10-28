<script lang="ts">
  import type { Option } from "../SelectNative/SelectNative.svelte";
  import Select from "./Select.svelte";

  let value: Option = null;

  const options: Option[] = [
    { value: "DMB", label: "Dimebag Darell" },
    { value: "PHI", label: "Phil Anselmo" },
    { value: "REX", label: "Rex Brown" },
    { value: "VIN", label: "Vinnie Paul" },
  ];
</script>

<style>
  .select-example-container > :global(*) {
    margin-top: 12px;
  }
</style>

<div class="select-example-container">
  <Select bind:value label="Select one" {options} />
  <Select bind:value native label="Native select" {options} />
</div>
