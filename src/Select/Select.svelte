<script context="module" lang="ts">
  export type Option = { value: string; label: string };
</script>

<script lang="ts">
  import Field from "../Field";
  import type { Status } from "../Field/Field.svelte";
  import createId from "../utils/createId";

  export let options: Option[] = [];

  export let label = "";
  export let id = createId();
  export let message = "";
  export let skeleton = false;
  export let status: Status = "default";
  export let gutter = false;
  export let value = null;
</script>

<Field bind:label bind:status bind:id bind:message bind:skeleton bind:gutter>
  <span slot="before">
    <slot name="before" />
  </span>
  <select {...$$restProps} bind:value on:change on:blur on:focus>
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  <span slot="after">
    <slot name="after" />
  </span>
</Field>
