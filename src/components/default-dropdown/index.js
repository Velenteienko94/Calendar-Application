import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 * @param {HTMLOptionElement[]} options
 */
export function createDefaultDropdown(options = [], atributes = {}) {
  const select = createElement("select", {
    ...atributes,
    onchange: (e) => {
      console.log(e);
    },
  });
  options.forEach((option) => {
    select.appendChild(option);
  });

  return select;
}
