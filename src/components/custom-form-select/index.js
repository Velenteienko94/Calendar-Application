import "./style.scss";
import { createElement } from "../../utils/createElement";
import { createDefaultDropdown } from "../default-dropdown/index";
import { createDefaultOptions } from "../default-options/index";
import { createLable } from "../create-lable";
/**
 *
 */
export function createCustomFormSelect(
  options = [],
  atributes = {},
  lableAtributes = []
) {
  const customFormSelect = createElement("div", {
    className: "form-select",
  });

  const defaultOption = createDefaultOptions(options);
  const formSelect = createDefaultDropdown(defaultOption, atributes);
  const lable = createLable(...lableAtributes);

  const customFormArrow = createElement("span", {
    className: "custom-form-arrow",
  });

  customFormSelect.appendChild(lable);
  customFormSelect.appendChild(formSelect);
  customFormSelect.appendChild(customFormArrow);

  return customFormSelect;
}
