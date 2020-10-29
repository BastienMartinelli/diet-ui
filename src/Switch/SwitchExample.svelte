<script lang="ts">
  import Switch from "./Switch.svelte";

  let checked = false;
</script>

<h4>{checked ? 'checked' : 'unchecked'}</h4>
<Switch label="Switch label" bind:checked />
