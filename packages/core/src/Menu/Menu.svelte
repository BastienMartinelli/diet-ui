<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { attemptFocus } from "../utils/focusUtils";

  export let separator = false;
  export let ref: HTMLDivElement = null;

  const dispatch = createEventDispatcher();

  function handleKeyDown(e: KeyboardEvent) {
    let nextEl = null;

    if (e.key === "ArrowDown") {
      nextEl = document.activeElement.nextElementSibling;
    } else if (e.key === "ArrowUp") {
      nextEl = document.activeElement.previousElementSibling;
    } else if (e.key === "Tab") {
      dispatch("shift");
    }

    if (nextEl) {
      try {
        attemptFocus(nextEl);
      } catch (err) {}
    }
  }
</script>

<style>
  .separator > :global(*):not(:first-child) {
    border-top: solid 1px var(--grey-light);
  }
</style>

<div
  on:keydown={handleKeyDown}
  {...$$restProps}
  class={$$restProps.class}
  class:separator
  bind:this={ref}>
  <slot />
</div>
