/**
 *
 * @param {*} tagName
 * @param {*} properties
 */
export function createElement(tagName, properties = {}) {
  const element = document.createElement(tagName);
  for (const [props, value] of Object.entries(properties)) {
    element[props] = value;
  }
  return element;
}
