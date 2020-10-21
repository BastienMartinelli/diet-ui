/**
 * Test if an DOM element is focusable
 *
 * @param element The element to test
 * @param allowNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 */
export function isFocusable(
  element: any = {},
  allowNegativeTabIndex = false,
): boolean {
  if (
    element.tabIndex > 0 ||
    (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) ||
    (allowNegativeTabIndex &&
      element.tabIndex === -1 &&
      element.getAttribute('tabIndex') !== null)
  ) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case 'A':
      return !!element.href && element.rel !== 'ignore';
    case 'INPUT':
      return element.type !== 'hidden' && element.type !== 'file';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
}

export type attemptFocusType = (
  element,
  allowNegativeTabIndex?: boolean,
) => boolean;

/**
 * Try to focus a given DOM elements
 * @param element Element to focus
 * @param allowNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @returns true if focus went well, false if the element was not focusable or if an error occured
 */
export const attemptFocus: attemptFocusType = (
  element,
  allowNegativeTabIndex = false,
) => {
  if (!isFocusable(element, allowNegativeTabIndex)) {
    return false;
  }
  try {
    element.focus();
  } catch (e) {
    return false;
  }
  return document.activeElement === element;
};

/**
 * Focus the first focusable descendant of a given DOM element
 * @param element The parent element
 * @param includeNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @param customAttemptFocus Custom function to test focusability of an element and focus it if able. If none is given a simple default one will be used.
 * @return true if the focus went well, false if no focusable element was found
 */
export function focusFirstDescendant(
  element,
  includeNegativeTabIndex = false,
  customAttemptFocus: attemptFocusType = null,
): boolean {
  const doAttemptFocus = customAttemptFocus || attemptFocus;
  if (element && element.childNodes) {
    for (let i = 0; i < element.childNodes.length; i += 1) {
      const child = element.childNodes[i];
      if (
        doAttemptFocus(child, includeNegativeTabIndex) ||
        focusFirstDescendant(child, includeNegativeTabIndex, customAttemptFocus)
      ) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Focus the last focusable descendant of a given DOM element
 * @param element The parent element
 * @param includeNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @param customAttemptFocus Custom function to test focusability of an element and focus it if able. If none is given a simple default one will be used.
 * @return true if the focus went well, false if no focusable element was found
 */
export function focusLastDescendant(
  element,
  includeNegativeTabIndex = false,
  customAttemptFocus: attemptFocusType = null,
): boolean {
  const doAttemptFocus = customAttemptFocus || attemptFocus;
  if (element && element.childNodes) {
    for (let i = element.childNodes.length - 1; i >= 0; i -= 1) {
      const child = element.childNodes[i];
      if (
        doAttemptFocus(child, includeNegativeTabIndex) ||
        focusLastDescendant(child, includeNegativeTabIndex, customAttemptFocus)
      ) {
        return true;
      }
    }
  }
  return false;
}
