import { onDestroy } from "svelte";

/**
 * Delay the exectution of the given callback by the the given time
 * @param func the callback function to execution after delay
 * @param delay the execution delay
 */
function delayedExec<T>(func: T, delay: number): [() => void, () => void] {
  let timer = null;

  function call(): void {
    // start the timer if none already exist
    if (!timer) {
      timer = setTimeout(() => {
        if (func && typeof func === "function") {
          func();
        }
      }, delay);
    }
  }

  function cancel(): void {
    if (timer) {
      // clear the existing timer
      clearTimeout(timer);
      timer = null;
    }
  }

  onDestroy(cancel);

  return [
    call,
    cancel,
  ]
}

export default delayedExec