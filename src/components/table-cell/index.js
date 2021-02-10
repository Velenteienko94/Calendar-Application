import { createElement } from "../../utils/createElement";
import "./style.scss";
/**
 *
 * @param {*} properties
 */
export function createTableCell(properties = {}) {
  const td = createElement("td", properties);
  return td;
}
