<script lang="ts">
  import Portal from "../Portal";
  import { attemptFocus, focusFirstDescendant } from "../utils/focusUtils";
  import { slide } from "svelte/transition";
  import { createPopper, Placement } from "@popperjs/core";
  import { createEventDispatcher } from "svelte";

  export let placement: Placement = "bottom";

  export let open = null;
  export let triggerEl: HTMLElement = null;
  export let autofocus = false;
  export let ref: HTMLDivElement = null;

  let innerOpen = false;

  const dispatch = createEventDispatcher();

  function handleClose() {
    if (open !== null) {
      dispatch("close");
    } else {
      innerOpen = false;
    }
  }

  function focusTrigger() {
    if (triggerEl && !attemptFocus(triggerEl)) {
      focusFirstDescendant(triggerEl);
    }
  }

  function handleClick(e: UIEvent) {
    if (
      !ref?.contains(e.target as Element) &&
      !triggerEl?.contains(e.target as Element)
    ) {
      handleClose();
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      handleClose();
      focusTrigger();
    }
  }

  function handleFocus(e: FocusEvent) {
    const el = document.activeElement;
    if (!ref?.contains(el) && !triggerEl?.contains(el)) {
      handleClose();
      focusTrigger();
    }
  }

  $: isOpened = open === null ? innerOpen : open;

  $: if (isOpened && ref) {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocus);
  } else {
    document.removeEventListener("click", handleClick);
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("focusin", handleFocus);
  }

  $: if (isOpened && triggerEl && ref) {
    createPopper(triggerEl, ref, {
      placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
      ],
    });
  }

  $: if (ref && autofocus) {
    focusFirstDescendant(ref);
  }
</script>

<style>
  .container {
    position: relative;
    display: block;
    width: fit-content;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    z-index: var(--z-index-tooltip);
    padding: 6px 0 6px 0;
    background-color: white;
  }

  .trigger {
    display: block;
    width: fit-content;
  }
</style>

{#if $$slots.trigger}
  <span
    class="trigger"
    bind:this={triggerEl}
    on:click={() => {
      if (open === null) {
        innerOpen = true;
      }
    }}>
    <slot name="trigger" />
  </span>
{/if}
<Portal>
  {#if isOpened}
    <div transition:slide={{ duration: 100 }} class="container" bind:this={ref}>
      <slot />
    </div>
  {/if}
</Portal>
