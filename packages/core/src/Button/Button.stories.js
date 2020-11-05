import { Button } from "../";
import ButtonExample from "./ButtonExample"

export default {
  title: 'Example/Button',
  Component: Button,
};

export const Default = () => ({
  Component: Button,
});

export const All = () => ({
  Component: ButtonExample
});

export const Skeleton = () => ({
  Component: Button,
  props: {
    skeleton: true,
  }
});

export const Loading = () => ({
  Component: Button,
  props: {
    loading: true,
  }
});