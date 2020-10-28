<script lang="ts">
  import { ButtonGroup, Button } from "../";

  let active = 1;

  const handleClick = (index: number) => () => {
    active = index || 0;
  };
</script>

<style>
  :global(div.button-example-container > *) {
    margin-top: 12px;
  }
</style>

<div class="button-example-container">
  <ButtonGroup>
    <Button><i slot="before" class="fas fa-star" />Action 1</Button>
    <Button><i slot="before" class="fas fa-save" />Action 2</Button>
    <Button>Action 3</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button variant="outlined" rounded>
      <i slot="before" class="fas fa-star" />Action 1
    </Button>
    <Button variant="outlined" rounded>
      <i slot="before" class="fas fa-save" />Action 2
    </Button>
    <Button variant="outlined" rounded>Action 3</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button variant="light" rounded>
      <i slot="before" class="fas fa-star" />Action 1
    </Button>
    <Button variant="light" rounded>
      <i slot="before" class="fas fa-save" />Action 2
    </Button>
    <Button variant="light" rounded>Action 3</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button skeleton><i slot="before" class="fas fa-star" />Action 1</Button>
    <Button skeleton><i slot="before" class="fas fa-save" />Action 2</Button>
    <Button skeleton>Action 3</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button color="success" rounded icon><i class="fas fa-star" /></Button>
    <Button color="success" rounded icon><i class="fas fa-save" /></Button>
    <Button color="success" rounded icon><i class="fas fa-file" /></Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button color="error" variant="outlined" rounded icon>
      <i class="fas fa-star" />
    </Button>
    <Button color="error" variant="outlined" rounded icon>
      <i class="fas fa-save" />
    </Button>
    <Button color="error" variant="outlined" rounded icon>
      <i class="fas fa-file" />
    </Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button variant="light" rounded icon><i class="fas fa-star" /></Button>
    <Button variant="light" rounded icon><i class="fas fa-save" /></Button>
    <Button variant="light" rounded icon><i class="fas fa-file" /></Button>
  </ButtonGroup>

  <ButtonGroup direction="vertical">
    <Button rounded icon><i class="fas fa-star" /></Button>
    <Button rounded icon><i class="fas fa-save" /></Button>
    <Button rounded icon><i class="fas fa-file" /></Button>
  </ButtonGroup>

  <div>
    <p>Selectables</p>
    <ButtonGroup>
      <Button
        variant={active === 0 ? 'filled' : 'outlined'}
        on:click={handleClick(0)}
        rounded>
        Action 1
      </Button>
      <Button
        variant={active === 1 ? 'filled' : 'outlined'}
        on:click={handleClick(1)}
        rounded>
        Action 2
      </Button>
      <Button
        variant={active === 2 ? 'filled' : 'outlined'}
        on:click={handleClick(2)}
        rounded>
        Action 3
      </Button>
    </ButtonGroup>
  </div>
</div>
