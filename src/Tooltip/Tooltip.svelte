<script lang="ts">
  import { createPopper, Placement } from "@popperjs/core";
  import { fade } from "svelte/transition";
  import Portal from "../Portal";

  /**
   * The content of the tooltip
   */
  export let content = "";

  /**
   * The Popperjs placement
   */
  export let placement: Placement = "bottom";

  let anchorEl = null;
  let tooltipEl = null;
  let opened = false;

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

  function open() {
    opened = true;
  }

  function close() {
    opened = false;
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
    opacity: 0.8;
    font-size: 14px;
  }
</style>

<span
  class="container"
  bind:this={anchorEl}
  on:mouseenter={open}
  on:focus={open}
  on:mouseleave={close}
  on:blur={close}>
  <slot />
</span>
<Portal>
  {#if opened}
    {#if $$slots.content}
      <span bind:this={tooltipEl}>
        <slot name="content" />
      </span>
    {:else if content}
      <span
        transition:fade={{ duration: 100 }}
        bind:this={tooltipEl}
        class="tooltip">
        {content}
      </span>
    {/if}
  {/if}
</Portal>
