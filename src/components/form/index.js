import "./style.scss";
import { createElement } from "../../utils/createElement";
import { createCustomFormSelect } from "../custom-form-select/index";
import { createBtn } from "../create-btn/index";
import { createLable } from "../create-lable/index";
import {
  daysOfWeek,
  slotsOfTime,
  participants,
  meetings,
} from "../../constants";
import {
  getSelectedOptionsIndex,
  getSelectedOptionsValue,
  createMeeting,
} from "../../utils/getSelectedIndex";

/**
 *
 */
export function createForm() {
  const formContainer = createElement("div", {
    className: "selectContainer",
  });

  const form = createElement("form", {
    className: "eventForm",
    onsubmit: (event) => {
      event.preventDefault();
      console.log(event);
      // const form = document.querySelector(".eventForm");
      const selectedNameOfEvent = document.getElementById("nameOfEvent");
      const participantsSelect = document.getElementById("participants-select");
      const daySelect = document.getElementById("day-select");
      const timeSelect = document.getElementById("time-select");

      const nameOfEvent = selectedNameOfEvent.value;
      const participants = getSelectedOptionsValue(participantsSelect);
      const day = getSelectedOptionsIndex(daySelect);
      const time = getSelectedOptionsIndex(timeSelect);
      createMeeting(nameOfEvent, participants, ...day, ...time);
      console.log(meetings);

      localStorage.setItem("meetings", JSON.stringify(meetings));

      // const selectedDay = [];
      // for (const option of daySelect.options) {
      //   if (option.selected) {
      //     selectedDay.push(option.index);
      //   }
      // }
      // console.log(selectedDay);
      // const formData = new FormData(form);
      // const event1 = {};
      // const events = [];
      // // for (const [key, value] of formData) {
      // //   event1[key] = value;
      // // }
      // // console.log(event1);

      // for (const [key, value] of formData.entries()) {
      //   if (key === "nameOfEvent") {
      //     event1["name"] = value;
      //   }
      //   if (key === "day-select") {
      //     event1["day"] = value;
      //   }
      //   if (key === "time-select") {
      //     event1["time"] = value;
      //   }
      //   if (key === "participants-select") {
      //     event1["participants"] = [].push(value);
      //   }
      // }
      // events.push(event);
      // console.log(event1);
    },
  });

  const lableForEvent = createLable("nameOfEvent", "Name of event: ");
  const input = createElement("input", {
    type: "text",
    name: "nameOfEvent",
    placeholder: "Name of event",
    id: "nameOfEvent",
  });

  const participantsSelect = createCustomFormSelect(
    participants,
    {
      id: "participants-select",
      multiple: "multiple",
      name: "participants-select",
    },
    ["participants-select", "Select participants:"]
  );

  const daySelect = createCustomFormSelect(
    daysOfWeek,
    { id: "day-select", name: "day-select" },
    ["day-select", "Select day:"]
  );

  const timeSelect = createCustomFormSelect(
    slotsOfTime,
    { id: "time-select", name: "time-select" },
    ["time-select", "Select time:"]
  );

  const btnCreate = createBtn({ type: "submit", innerText: "Create" });
  const btnCancel = createBtn({ innerText: "Cancel" });

  form.appendChild(lableForEvent);
  form.appendChild(input);

  formContainer.appendChild(participantsSelect);

  formContainer.appendChild(daySelect);

  formContainer.appendChild(timeSelect);
  form.appendChild(formContainer);

  form.appendChild(btnCreate);
  form.appendChild(btnCancel);

  const body = document.querySelector("body");
  return body.appendChild(form);
}

// form values = meetings
// const meetings = [
//   {
//     name: "sosi",
//     day: 2,
//     time: 3,
//     participants: ["",""],
//   },
// ]

// set to local Storage, check
