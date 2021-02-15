import "./style.scss";
import { createElement } from "../../utils/createElement";
import { createDropdown } from "../dropdown/index";
import { createOptions } from "../options/index";
import { participants } from "../../constants/index";
/**
 *
 */
export function createCustomSelect() {
  const customParticipantsSelect = createElement("div", {
    id: "custom-participants-select",
  });
  const participantSelect = createDropdown(createOptions(participants));
  const customArrow = createElement("span", { id: "custom-arrow" });
  customParticipantsSelect.appendChild(participantSelect);
  customParticipantsSelect.appendChild(customArrow);

  return customParticipantsSelect;
}
