import { createElement } from "../../utils/createElement";
import "./style.scss";

/**
 * creats*what it do
 * @param [string] participants
 * @returns {HTMLUListElement} *what it returns
 */
export function createList(participants = []) {
  const ul = createElement("ul");
  participants.forEach((participant) => {
    const li = createElement("li", { innerText: participant });
    ul.appendChild(li);
  });
  return ul;
}
