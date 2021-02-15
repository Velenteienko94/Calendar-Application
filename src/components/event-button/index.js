import "./style.scss";
import { createElement } from "../../utils/createElement";
/**
 *
 */
export function createEventBtn() {
  const btn = createElement("a", {
    id: "createEventBtn",
    innerText: "New event +",
    href: "../../../public/form.html",
  });
  return btn;
}
