import "./style.scss";
import { createElement } from "../../utils/createElement";
import { createCustomSelect } from "../custom-select/index";
import { createEventBtn } from "../event-button/index";
/**
 *
 * @param {[[string]]} calendar
 */
export function createToolbar(/*calendar,*/) {
  const toolBar = createElement("div", { id: "toolBar" });
  const title = createElement("span", { id: "title", innerText: "Calendar" });
  const customSelect = createCustomSelect();
  const eventBtn = createEventBtn();
  toolBar.appendChild(title);
  toolBar.appendChild(customSelect);
  toolBar.appendChild(eventBtn);
  return toolBar;
}
