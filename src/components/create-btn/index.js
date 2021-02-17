import "./style.scss";
import { createElement } from "../../utils/createElement";

/**
 *
 */
export function createBtn(atributes = {}) {
  const btn = createElement("button", {
    className: "Btn",
    ...atributes,
  });
  return btn;
}
