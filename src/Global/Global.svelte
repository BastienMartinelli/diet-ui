<style>
  :global(:root) {
    --primary-dark: #324090;
    --primary: #3f51b5;
    --primary-light: #9ca6dc;
    --primary-xlight: #cdd2ed;
    --primary-contrast: white;

    --error-dark: #bf124d;
    --error: #e91e63;
    --error-light: #f38eb1;
    --error-xlight: #f9c6d8;
    --error-contrast: white;

    --success-dark: #3c8c40;
    --success: #4caf50;
    --success-light: #a4d7a6;
    --success-xlight: #d1ebd2;
    --success-contrast: white;

    --secondary-dark: #7c1f8c;
    --secondary: #9c27b0;
    --secondary-light: #d686e4;
    --secondary-xlight: #eac2f1;
    --secondary-contrast: white;

    --warning-dark: #cc7900;
    --warning: #ff9800;
    --warning-light: #ffcb7f;
    --warning-xlight: #ffe4bf;
    --warning-contrast: white;

    --grey-dark: #646464;
    --grey: #9e9e9e;
    --grey-light: #cecece;
    --grey-xlight: #e6e6e6;
    --grey-contrast: white;
    --black: #1b051c;
    --white: #ffffff;

    --contrast: #fff;

    --text-contrast: #fff;
    --text-primary: #000;
    --text-secondary: grey;

    --shadow: 0 0.25rem 1rem var(--grey);

    --outline: rgb(0, 196, 255);

    --border-radius: 8px;

    --z-index-stepper: 1000;
    --z-index-navbar: 1100;
    --z-index-drawer: 1200;
    --z-index-modal: 1300;
    --z-index-dropdown: 1400;
    --z-index-snackbar: 1500;
    --z-index-tooltip: 1600;

    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  :global(.skeleton) {
    animation: glow 1s linear infinite alternate;
    color: transparent !important;
    background-color: var(--grey) !important;
    box-shadow: none !important;
    pointer-events: none;
    user-select: none;
    background-image: none !important;
    text-shadow: none !important;
  }

  @keyframes -global-glow {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.7;
    }
  }
</style>
