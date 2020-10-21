import { onDestroy, onMount } from "svelte";

export function portal(node, rootEl = null) {
  let root = null;
  let portal;

  onMount(() => {
    root = rootEl || document.body;
    portal = document.createElement('div')
    root.appendChild(portal)
    portal.appendChild(node)
  })

  onDestroy(() => {
    if (root) root.removeChild(portal)
  })
}

export default portal;