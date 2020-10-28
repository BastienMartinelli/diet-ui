<script lang="ts">
  import Portal from "../Portal";
  import { attemptFocus, focusFirstDescendant } from "../utils/focusUtils";
  import { slide } from "svelte/transition";
  import { createPopper, Placement } from "@popperjs/core";
  import { createEventDispatcher } from "svelte";

  export let placement: Placement = "bottom";

  export let open = null;
  export let triggerEl: HTMLElement = null;

  let innerOpen = false;
  let lastEl = null;
  let containerEl: HTMLDivElement = null;

  const dispatch = createEventDispatcher();

  function handleFocusLastEl() {
    attemptFocus(triggerEl);
  }

  function handleClick(e: UIEvent) {
    if (
      !containerEl?.contains(e.target as Element) &&
      !triggerEl?.contains(e.target as Element)
    ) {
      if (open !== null) {
        dispatch("close");
      } else {
        innerOpen = false;
      }
    }
  }

  $: isOpened = open === null ? innerOpen : open;

  $: if (isOpened) {
    window.addEventListener("click", handleClick);
  } else {
    window.removeEventListener("click", handleClick);
  }

  $: if (isOpened && triggerEl && containerEl) {
    createPopper(triggerEl, containerEl, {
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

  $: if (containerEl) {
    focusFirstDescendant(containerEl);
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
    <div
      transition:slide={{ duration: 100 }}
      class="container"
      bind:this={containerEl}>
      <slot />
      <div tabindex="0" bind:this={lastEl} on:focus={handleFocusLastEl} />
    </div>
  {/if}
</Portal>
