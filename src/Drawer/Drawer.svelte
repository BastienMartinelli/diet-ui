<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte";

  import { fly, fade } from "svelte/transition";
  import Portal from "../Portal";
  import TrapFocus from "../TrapFocus";
  import { focusFirstDescendant } from "../utils/focusUtils";

  export let open = false;
  export let position: "left" | "right" | "top" | "bottom" = "left";
  export let noOverlay = false;
  export let persistent = false;
  export let triggerEl = null;

  let container: HTMLDivElement = null;
  let bodyStyle = null;
  let autofocus = false;

  const transitionOpts = {
    left: {
      x: -200,
      y: 0,
    },
    right: {
      x: 200,
      y: 0,
    },
    top: {
      x: 0,
      y: -200,
    },
    bottom: {
      x: 0,
      y: 200,
    },
  };

  const dispatch = createEventDispatcher();

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      dispatch("close");
    }
  }

  function handleClick(e: MouseEvent) {
    if (!persistent && container && !container.contains(e.target as Node)) {
      dispatch("close");
    }
  }

  function reinit() {
    document.body.style.overflow = bodyStyle;
    autofocus = false;
    if (triggerEl && !open) {
      setTimeout(() => {
        focusFirstDescendant(triggerEl);
      }, 0);
    }
    dispatch("outroend");
  }

  $: if (open) {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClick);
    bodyStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } else {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("mousedown", handleClick);
  }

  onDestroy(() => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("mousedown", handleClick);
  });
</script>

<style>
  .container {
    position: absolute;
    z-index: var(--z-index-drawer);
    background-color: var(--white);
    box-shadow: var(--shadow);
    height: var(--drawer-height);
    top: var(--drawer-top);
    left: var(--drawer-left);
    right: var(--drawer-right);
    bottom: var(--drawer-bottom);
    width: var(--drawer-width);
    min-height: var(--drawer-min-height);
    min-width: var(--drawer-min-width);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: calc(var(--z-index-drawer) - 1);
    opacity: 0.5;
    background-color: black;
  }

  .left {
    --drawer-height: 100vh;
    --drawer-top: 0px;
    --drawer-left: 0px;
    --drawer-right: auto;
    --drawer-bottom: auto;
    --drawer-width: auto;
    --drawer-min-height: auto;
    --drawer-min-width: 200px;
  }

  .right {
    --drawer-height: 100vh;
    --drawer-top: 0px;
    --drawer-left: auto;
    --drawer-right: 0px;
    --drawer-bottom: auto;
    --drawer-width: auto;
    --drawer-min-height: auto;
    --drawer-min-width: 200px;
  }

  .top {
    --drawer-height: auto;
    --drawer-top: 0px;
    --drawer-left: 0px;
    --drawer-right: auto;
    --drawer-bottom: auto;
    --drawer-width: 100vw;
    --drawer-min-height: 200px;
    --drawer-min-width: auto;
  }

  .bottom {
    --drawer-height: auto;
    --drawer-top: auto;
    --drawer-left: 0px;
    --drawer-right: auto;
    --drawer-bottom: 0px;
    --drawer-width: 100vw;
    --drawer-min-height: 200px;
    --drawer-min-width: auto;
  }
</style>

{#if $$slots.trigger}
  <span bind:this={triggerEl}>
    <slot name="trigger" />
  </span>
{/if}
<Portal>
  {#if open}
    {#if !noOverlay}
      <div class="overlay" transition:fade={{ duration: 200 }} />
    {/if}
    <div
      {...$$restProps}
      class="container {position} {$$props.class}"
      bind:this={container}
      transition:fly={{ ...transitionOpts[position], duration: 200, opacity: 1 }}
      on:outroend={reinit}
      on:introend={() => (autofocus = true)}>
      <TrapFocus bind:autofocus>
        <slot />
      </TrapFocus>
    </div>
  {/if}
</Portal>
