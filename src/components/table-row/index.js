import { createElement } from "../../utils/createElement";
/**
 *
 * @param {*} cells
 */
export function createTableRow(cells = []) {
  const tr = createElement("tr");
  for (const cell of cells) {
    tr.appendChild(cell);
  }
  return tr;
}
