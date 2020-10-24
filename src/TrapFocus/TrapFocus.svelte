<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { attemptFocus, focusFirstDescendant } from "../utils/focusUtils";

  export let autofocus = false;

  let containerNode: HTMLDivElement;
  let startNode: HTMLDivElement;
  let endNode: HTMLDivElement;
  let lastFocus: Element;

  /**
   * Redirect all focus outside of the container to the first
   * of last element of the container if strict mode enabled
   * @param event the focus event
   */
  function onFocusForTrap(event: FocusEvent): void {
    if (!containerNode) return;

    if (containerNode.contains(event.target as Node)) {
      lastFocus = event.target as Element;
    } else if (lastFocus) {
      attemptFocus(lastFocus);
      lastFocus = document.activeElement;
    } else {
      focusFirstDescendant(containerNode, false);
      lastFocus = document.activeElement;
    }
  }

  onMount(() => {
    document.addEventListener("focus", onFocusForTrap, true);
    if (autofocus) {
      focusFirstDescendant(containerNode, false);
    }
  });

  onDestroy(() => {
    document.removeEventListener("focus", onFocusForTrap, true);
  });

  $: if (autofocus) {
    focusFirstDescendant(containerNode, false);
  }
</script>

<div bind:this={startNode} tabindex="0" />
<div bind:this={containerNode}>
  <slot />
</div>
<div bind:this={endNode} tabindex="0" />
