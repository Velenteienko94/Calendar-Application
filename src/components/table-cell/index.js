import { createElement } from "../../utils/createElement";
/**
 *
 * @param {*} properties
 */
export function createTableCell(properties = {}) {
  const td = createElement("td", properties);
  return td;
}
