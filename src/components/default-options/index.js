import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 *
 * @param {string[]} participanNames
 */
export function createDefaultOptions(optionsArr = []) {
  const options = optionsArr.map((optionName, optionIndex) => {
    const option = createElement("option", {
      innerText: optionName,
      value: optionIndex,
    });
    return option;
  });

  return options;
}
