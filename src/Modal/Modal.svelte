<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Portal from "../Portal";
  import Button from "../Button";
  import Close from "../icons/Close.svelte";
  import TrapFocus from "../TrapFocus/TrapFocus.svelte";

  export let open = false;

  const dispatch = createEventDispatcher();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      dispatch("close");
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
</script>

<style>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: calc(var(--z-index-modal) + 1);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    height: 100vh;
    width: 100vw;
    z-index: var(--z-index-modal);
  }

  :global(.modal-content) {
    background-color: var(--white);
    min-width: 300px;
    min-height: 100px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.4);
    border-radius: var(--border-radius);
    position: relative;
  }

  .close-modal {
    position: absolute;
    right: 6px;
    top: 6px;
  }

  .header {
    display: "flex";
    align-items: center;
    height: 50px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 6px;
  }

  .footer {
    display: flex;
    align-items: center;
    height: 50px;
  }
</style>

<Portal>
  {#if open}
    <div transition:fade={{ duration: 100 }} class="overlay" />
    <div class="container" on:click={() => dispatch('close')}>
      <div class="modal-content" on:click|stopPropagation>
        <TrapFocus autofocus>
          <span class="close-modal">
            <Button
              on:click={() => dispatch('close')}
              icon
              rounded
              variant="light"
              color="none">
              <Close height="12px" width="12px" />
            </Button>
          </span>
          <div class="header">
            <slot name="header" />
          </div>
          <slot name="content" />
          <div class="footer">
            <slot name="footer" />
          </div>
        </TrapFocus>
      </div>
    </div>
  {/if}
</Portal>
