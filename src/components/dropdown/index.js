import "./style.scss";
import { createElement } from "../../utils/createElement";

/**
 * @param {HTMLOptionElement[]} options
 */
export function createDropdown(options = []) {
  const select = createElement("select", {
    id: "participant-select",
    className: "dropdownMenu",
    onchange: (e) => {
      // const dropdown = document.getElementById("participant-select");
      // const dropDownValue = dropdown.value;
      // return dropDownValue;
    },
  });
  options.forEach((option) => {
    select.appendChild(option);
  });

  return select;
}

// var e = document.getElementById("ddlViewBy");
// var strUser = e.options[e.selectedIndex].text;
