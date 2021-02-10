import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 *
 */
export function createEventBtn() {
  const btn = createElement("button", {
    id: "createEventBtn",
    innerText: "New event +",
  });
  return btn;
}
