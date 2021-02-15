import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 * @param {HTMLOptionElement[]} options
 */
export function createDropdown(options = []) {
  const select = createElement("select", {
    id: "participant-select",
    className: "dropdownMenu",
    onchange: (e) => {
      console.log(e);
    },
  });
  options.forEach((option) => {
    select.appendChild(option);
  });

  return select;
}
