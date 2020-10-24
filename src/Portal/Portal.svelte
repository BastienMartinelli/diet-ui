<script lang="ts">
  import { onMount } from "svelte";

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
    console.log("ok");
    console.log(root);
    console.log(portal);
    if (root && portal) {
      root.removeChild(portal);
      portal = null;
    }
  }

  onMount(() => {
    return () => {
      destroyPortal();
    };
  });

  $: if (disabled) {
    destroyPortal();
  } else if (!portal) {
    createPortal();
  }
</script>

<div bind:this={node}>
  <slot />
</div>
