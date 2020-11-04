<script lang="ts">
  import Switch from "./Switch.svelte";

  let checked = false;
</script>

<h4>{checked ? 'checked' : 'unchecked'}</h4>
<Switch label="Switch label" bind:checked />
<Switch label="checked" checked />
<Switch label="unchecked" checked={false} />
<Switch label="checked disabled" checked disabled />
<Switch label="unchecked disabled" checked={false} disabled />
<Switch label="skeleton" skeleton />
