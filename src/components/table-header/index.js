import { createElement } from "../../utils/createElement";
import "./style.scss";
/**
 *
 * @param {*} properties
 */
export function createTableHeader(properties = {}) {
  const th = createElement("th", { className: "table-header" });
  for (const [props, value] of Object.entries(properties)) {
    th[props] = value;
  }
  return th;
}
