import FieldExample from "./FieldExample.svelte";

export default {
  title: 'Example/Field',
};

export const Default = () => ({
  Component: FieldExample,
  args: {
    label: "field label",
    placeholder: "placeholder"
  }
});