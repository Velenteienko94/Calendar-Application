import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 *
 * @param {string} lableFor
 * @param {string} textOfLable
 */
export function createLable(lableFor, textOfLable) {
  const lable = createElement("lable", {
    for: lableFor,
    innerText: textOfLable,
  });
  return lable;
}
