import "./style.scss";
import { createElement } from "../../utils/createElement";

/**
 *
 */
export function createBtn(btnText) {
  const btn = createElement("button", {
    className: "Btn",
    innerText: btnText,
  });
  return btn;
}
