<script lang="ts">
  import { createPopper, Placement } from "@popperjs/core";
  import { fade } from "svelte/transition";
  import Portal from "../Portal";
  import createId from "../utils/createId";
  import delayedExec from "../utils/delayedExec";

  export let content = "";
  export let placement: Placement = "bottom";
  export let id = null;
  export let delay = 200;
  export let touchCloseDelay = 3000;
  export let touchDelay = 1000;

  const isTouchDevice =
    "ontouchstart" in window || navigator.msMaxTouchPoints || false;

  let anchorEl = null;
  let tooltipEl = null;
  let opened = false;

  const uid = id || createId();
  const openDelay = isTouchDevice ? touchDelay : delay;

  const close = () => {
    cancelOpen();
    opened = false;
  };

  const [open, cancelOpen] = delayedExec(() => {
    opened = true;
    if (isTouchDevice) {
      setTimeout(close, touchCloseDelay);
    }
  }, openDelay);

  const handleFocus = (): void => {
    // don't use focus on touch devices
    if (!isTouchDevice) {
      open();
    }
  };

  const handleMouseEnter = (): void => {
    // don't use focus on touch devices
    if (!isTouchDevice) {
      open();
    }
  };

  const handleTouchStart = (e: Event): void => {
    e.preventDefault();
    e.stopPropagation();
    open();
  };

  $: tooltipProps = {
    id: uid,
    role: "tooltip",
    "aria-hidden": !open,
  };

  $: if (opened && tooltipEl && anchorEl) {
    createPopper(anchorEl, tooltipEl, {
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
</script>

<style>
  .container {
    display: block;
    width: fit-content;
  }

  .tooltip {
    padding: 8px;
    border-radius: var(--border-radius);
    background-color: var(--grey-dark);
    color: var(--white);
    font-size: 14px;
    z-index: var(--z-index-tooltip);
  }
</style>

<span
  class="container"
  bind:this={anchorEl}
  aria-describedby={uid}
  on:mouseenter={handleMouseEnter}
  on:focusin={handleFocus}
  on:touchstart={handleTouchStart}
  on:mouseleave={close}
  on:focusout={close}>
  <slot />
</span>
<Portal>
  {#if opened}
    {#if $$slots.content}
      <span {...tooltipProps} bind:this={tooltipEl}>
        <slot name="content" />
      </span>
    {:else if content}
      <span
        {...tooltipProps}
        transition:fade={{ duration: 100 }}
        bind:this={tooltipEl}
        class="tooltip">
        {content}
      </span>
    {/if}
  {/if}
</Portal>
