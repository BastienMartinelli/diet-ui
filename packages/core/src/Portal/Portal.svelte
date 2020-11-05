<script lang="ts">
  import { onDestroy } from "svelte";

  export let disabled = false;
  export let root = document?.body;

  let node = null;
  let portal = null;

  function createPortal() {
    portal = document.createElement("div");
    root.appendChild(portal);
    portal.appendChild(node);
  }

  function destroyPortal() {
    if (root && portal) {
      root.removeChild(portal);
      portal = null;
    }
  }

  onDestroy(destroyPortal);

  $: if (disabled) {
    destroyPortal();
  } else if (!portal && node) {
    createPortal();
  }
</script>

<div bind:this={node}>
  <slot />
</div>
