import "./style.scss";
import { createElement } from "../../utils/createElement";
import { createCustomFormSelect } from "../custom-form-select/index";
import { createBtn } from "../create-btn/index";
import { createLable } from "../create-lable/index";
import { daysOfWeek, slotsOfTime, participants } from "../../constants";

/**
 *
 */
export function createForm() {
  const formContainer = createElement("div", {
    className: "createFormDiv",
  });

  const form = createElement("form", {
    className: "createEventForm",
  });

  const fieldSet = createElement("fieldset");
  const lableForEvent = createLable("nameOfEvent", "Name of event: ");
  const input = createElement("input", {
    type: "text",
    name: "nameOfEvent",
    className: "nameOfEvent",
  });

  const lableForParticipantsSelect = createLable(
    "dropdownMenu",
    "Participants select: "
  );
  const participantsSelect = createCustomFormSelect(participants);

  const lableForDaySelect = createLable("dropdownMenu", "Day select: ");
  const daySelect = createCustomFormSelect(daysOfWeek);

  const lableForTime = createLable("dropdownMenu", "Time select: ");
  const timeSelect = createCustomFormSelect(slotsOfTime);

  const btnCreate = createBtn("Create");
  const btnCancel = createBtn("Cancel");

  formContainer.appendChild(fieldSet);
  fieldSet.appendChild(lableForEvent);
  fieldSet.appendChild(input);

  formContainer.appendChild(lableForParticipantsSelect);
  formContainer.appendChild(participantsSelect);

  formContainer.appendChild(lableForDaySelect);
  formContainer.appendChild(daySelect);

  formContainer.appendChild(lableForTime);
  formContainer.appendChild(timeSelect);
  form.appendChild(formContainer);

  form.appendChild(btnCreate);
  form.appendChild(btnCancel);

  const body = document.querySelector("body");
  return body.appendChild(form);
}
createForm();
