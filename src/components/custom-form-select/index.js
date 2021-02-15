import "./style.scss";
import { createElement } from "../../utils/createElement";
import { createDropdown } from "../dropdown/index";
import { createDefaultOptions } from "../default-options/index";
/**
 *
 */
export function createCustomFormSelect(options = []) {
  const customFormSelect = createElement("div", {
    calssName: "custom-form-select",
  });

  const defaultOption = createDefaultOptions(options);
  const formSelect = createDropdown(defaultOption);

  const customFormArrow = createElement("span", {
    className: "custom-form-arrow",
  });

  customFormSelect.appendChild(formSelect);
  customFormSelect.appendChild(customFormArrow);

  return customFormSelect;
}
