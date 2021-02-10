import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 * @param {HTMLOptionElement[]} options
 */
export function createDropdown(options = []) {
  const select = createElement("select", { id: "participant-select" });
  options.forEach((option) => {
    select.appendChild(option);
  });

  return select;
}
