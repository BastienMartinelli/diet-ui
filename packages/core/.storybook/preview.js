import { addDecorator } from '@storybook/svelte';
import Wrapper from "./GlobalDecorator.svelte";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(storyFn => {
  const { Component, props, on, WrapperData } = storyFn();

  return {
    Component,
    props,
    on,
    Wrapper,
    WrapperData,
  };
});