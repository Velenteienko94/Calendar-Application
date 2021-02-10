import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 *
 * @param {string[]} participanNames
 */
export function createOptions(participanNames = []) {
  const options = participanNames.map((name) => {
    const option = createElement("option", { innerText: name });
    return option;
  });
  return options;
}
