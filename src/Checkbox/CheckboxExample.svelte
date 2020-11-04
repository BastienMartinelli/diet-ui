<script lang="ts">
  import Checkbox from "./Checkbox.svelte";

  let checked = false;
</script>

<h4>{checked ? 'checked' : 'unchecked'}</h4>
<Checkbox label="Checkbox label" bind:checked />
<Checkbox label="Checkbox unchecked" checked={false} />
<Checkbox label="Checkbox checked" checked />
<Checkbox label="Checkbox unchecked disabled" checked={false} disabled />
<Checkbox label="Checkbox checked disabled" checked disabled />
<Checkbox label="Checkbox skeleton" skeleton />
