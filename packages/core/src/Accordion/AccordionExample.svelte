<script lang="ts">
  import Box from "../Box";
  import Button from "../Button";
  import Accordion from "./Accordion.svelte";

  const txt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi dolor, aliquet a nisl eu, porttitor posuere nulla. Mauris accumsan commodo viverra. Fusce sit amet nulla vitae nisl egestas gravida eget vitae urna. Vivamus dictum nulla vitae porta dapibus. Vivamus dapibus, sapien non interdum placerat, nunc tellus rutrum enim, sed ornare leo sem fringilla metus. Donec faucibus leo sit amet orci gravida, eget suscipit lectus posuere. Proin non euismod neque, a lacinia felis. Donec tempor consequat quam. Nunc id faucibus sem, ut ullamcorper ipsum. Sed ullamcorper gravida metus, ac ultrices eros. Maecenas et lacus nec nulla tempor pharetra. Fusce sed metus tortor. Donec eget eros elementum velit lacinia dictum quis ut lorem. Aenean accumsan scelerisque accumsan.";

  let open = false;
  let open2 = false;
  let open3 = 1;
</script>

<Button on:click={() => (open = !open)}>open</Button>
<Accordion {open}>{txt}</Accordion>
<br />
<Accordion open={open2} on:click={() => (open2 = !open2)} title="header">
  <span slot="panel"> {txt} </span>
</Accordion>
<br />
<Box border>
  <Accordion open={open3 === 1} on:click={() => (open3 = 1)} title="Panel 1">
    <div slot="panel">{txt}</div>
  </Accordion>
  <Accordion open={open3 === 2} on:click={() => (open3 = 2)} title="Panel 2">
    <div slot="panel">{txt}</div>
  </Accordion>
  <Accordion open={open3 === 3} on:click={() => (open3 = 3)} title="Panel 3">
    <i slot="before" class="fas fa-star" />
    <div slot="panel">{txt}</div>
    <i slot="after" class="fas fa-star" />
  </Accordion>
</Box>
