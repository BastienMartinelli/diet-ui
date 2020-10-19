<style>
  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
  }

  :global(div.button-group > button.btn) {
    border-radius: 0px;
  }

  :global(div.button-group > button.btn:first-child) {
    border-radius: 8px 0px 0px 8px;
  }

  :global(div.button-group > button.btn:last-child) {
    border-radius: 0px 8px 8px 0px;
  }
</style>

<div class="button-group">
  <slot />
</div>
