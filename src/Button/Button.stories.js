import { Button } from "../";
import ButtonGroupExample from "./ButtonGroupExample"

export default {
  title: 'Example/Button',
};

export const Default = () => ({
  Component: Button,
});

export const Group = () => ({
  Component: ButtonGroupExample
})

export const Skeleton = () => ({
  Component: Button,
  args: {
    skeleton: true,
  }
})