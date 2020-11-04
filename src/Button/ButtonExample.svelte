<script lang="ts">
  import { ButtonGroup, Button } from "../";
  import Global from "../Global";
</script>

<style>
  :global(div.button-example-container > *) {
    margin-top: 12px;
  }

  div.buttons-stack {
    margin-top: 12px;
    display: flex;
  }

  div.buttons-stack > :global(*) {
    margin-right: 8px;
  }
</style>

<div class="button-example-container">
  <div class="buttons-stack">
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="error">error</Button>
    <Button color="warning">warning</Button>
    <Button color="success">success</Button>
    <Button color="none">none</Button>
  </div>

  <div class="buttons-stack">
    <Button variant="outlined">Outlined</Button>
    <Button variant="outlined" color="secondary">Outlined</Button>
    <Button variant="outlined" color="error">Outlined</Button>
    <Button variant="outlined" color="warning">Outlined</Button>
    <Button variant="outlined" color="success">Outlined</Button>
    <Button variant="outlined" color="none">Outlined</Button>
  </div>

  <div class="buttons-stack">
    <Button variant="light">Light</Button>
    <Button variant="light" color="secondary">Light</Button>
    <Button variant="light" color="error">Light</Button>
    <Button variant="light" color="warning">Light</Button>
    <Button variant="light" color="success">Light</Button>
    <Button variant="light" color="none">Outlined</Button>
  </div>

  <div class="buttons-stack">
    <Button skeleton>button</Button>
    <Button skeleton variant="outlined">button</Button>
    <Button skeleton variant="light">button</Button>
    <Button rounded icon skeleton><i class="fas fa-star" /></Button>
  </div>

  <div class="buttons-stack">
    <Button loading>button</Button>
    <Button loading variant="outlined">button</Button>
    <Button loading variant="light">button</Button>
    <Button rounded icon loading><i class="fas fa-star" /></Button>
  </div>

  <div class="buttons-stack">
    <Button>
      Button
      <span slot="before"><strong>KM</strong></span>
      <i slot="after" class="fas fa-star" />
    </Button>
    <Button rounded>
      Button
      <span slot="before"><strong>KM</strong></span>
      <i slot="after" class="fas fa-star" />
    </Button>
    <Button variant="outlined">
      Button
      <span slot="before"><strong>KM</strong></span>
      <i slot="after" class="fas fa-star" />
    </Button>
    <Button variant="light">
      Button
      <span slot="before"><strong>KM</strong></span>
      <i slot="after" class="fas fa-star" />
    </Button>
  </div>

  <div class="buttons-stack">
    <Button icon><i class="fas fa-star" /></Button>
    <Button icon variant="outlined"><i class="fas fa-star" /></Button>
    <Button icon variant="light"><i class="fas fa-star" /></Button>
  </div>

  <div class="buttons-stack">
    <Button rounded icon><i class="fas fa-star" /></Button>
    <Button rounded icon variant="outlined"><i class="fas fa-star" /></Button>
    <Button rounded icon variant="light"><i class="fas fa-star" /></Button>
  </div>

  <div class="buttons-stack">
    <Button rounded>Rounded button</Button>
    <Button rounded variant="outlined">Rounded button</Button>
    <Button rounded variant="light">Rounded button</Button>
  </div>

  <div class="buttons-stack">
    <Button disabled>Disabled</Button>
    <Button disabled rounded>Disabled</Button>
    <Button disabled icon>A</Button>
    <Button disabled icon rounded>A</Button>
  </div>
</div>
