import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 *
 * @param {string[]} participanNames
 */
export function createDefaultOptions(optionsArr = []) {
  const options = optionsArr.map((optionName) => {
    const option = createElement("option", { innerText: optionName });
    return option;
  });

  return options;
}
