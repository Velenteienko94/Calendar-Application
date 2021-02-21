import { createElement } from "../../utils/createElement";
import "./style.scss";

/**
 * creats*what it do
 * @param [string] participants
 * @returns {HTMLUListElement} *what it returns
 */
export function createList(eventName) {
  const ul = createElement("ul");

  const li = createElement("li", { innerText: eventName });
  ul.appendChild(li);

  return ul;
}
