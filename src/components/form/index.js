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
export const storageEvent = JSON.parse(localStorage.getItem("meetings"));

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
      const form = document.querySelector(".eventForm");
      const formData = new FormData(form);

      /**
       *
       */
      function createEvent(formData) {
        const meeting = {};
        for (const [key, value] of formData.entries()) {
          if (meeting[key] !== undefined) {
            const values =
              typeof meeting[key] === "number"
                ? [meeting[key], parseInt(value)]
                : [...meeting[key], parseInt(value)];
            meeting[key] = values;
            continue;
          }
          if (value.length > 2 || key === "ventName") {
            meeting[key] = value;
          }
          if (meeting[key] === undefined) meeting[key] = parseInt(value);
        }

        return meeting;
      }

      meetings.push(createEvent(formData));
      const meeting = createEvent(formData);
      const AllStringifyEvents = JSON.stringify(meetings);
      const stringifyEvent = JSON.stringify(meeting);
      const storageEvent = JSON.parse(localStorage.getItem("meetings"));

      if (storageEvent === null) {
        localStorage.setItem("meetings", AllStringifyEvents);
      }
      if (
        storageEvent !== null &&
        storageEvent.some(
          ({ day, time }) => day === meeting.day && time === meeting.time
        )
      ) {
        throw (
          new Error(
            "You can't add more than one meeting in the same  day and time "
          ) && meetings.pop(meeting)
        );
      }
      if (
        storageEvent !== null &&
        !storageEvent.some(
          ({ day, time }) => day === meeting.day && time === meeting.time
        )
      ) {
        meetings.push(meeting);
        localStorage.setItem("meetings", AllStringifyEvents);
      }
    },
  });

  const lableForEvent = createLable("nameOfEvent", "Name of event: ");
  const input = createElement("input", {
    type: "text",
    name: "eventName",
    placeholder: "Name of event",
    id: "nameOfEvent",
  });

  const participantsSelect = createCustomFormSelect(
    participants,
    {
      id: "participants-select",
      multiple: "multiple",
      name: "participants",
    },
    ["participants-select", "Select participants:"]
  );

  const daySelect = createCustomFormSelect(
    daysOfWeek,
    { id: "day-select", name: "day" },
    ["day-select", "Select day:"]
  );

  const timeSelect = createCustomFormSelect(
    slotsOfTime,
    { id: "time-select", name: "time" },
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
