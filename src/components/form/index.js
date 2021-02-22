import "./style.scss";
import { createElement } from "../../utils/createElement";
import { createCustomFormSelect } from "../custom-form-select/index";
import { createBtn } from "../create-btn/index";
import { createLable } from "../create-lable/index";
import { daysOfWeek, slotsOfTime, participants } from "../../constants";

/**
 *create and object with 2 func
 *getMeetings get meetings from storage or create an empty array
 *createMeetings {meeting = {}} check is  storage alredy has the same meeting and set new meeting to the storage
 */
const calendarServiceFactory = () => {
  const storage = localStorage;

  const storageMeetingsKey = "meetings";

  const getMeetings = () =>
    JSON.parse(storage.getItem(storageMeetingsKey)) || [];

  const createMeeting = (meeting) => {
    const meetings = getMeetings();
    if (
      meetings.some(
        ({ day, time }) => day === meeting.day && time === meeting.time
      )
    )
      throw new Error(
        "You can't add more than one meeting in the same  day and time "
      );

    meetings.push(meeting);
    storage.setItem(storageMeetingsKey, JSON.stringify(meetings));
  };

  return { getMeetings, createMeeting };
};

const calendarService = calendarServiceFactory();

const mapFormData = (formData) => {
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
    if (value.length > 2 || key === "eventName") {
      meeting[key] = value;
    }
    if (meeting[key] === undefined) meeting[key] = parseInt(value);
  }

  return meeting;
};
/**
 *
 */
export function createForm() {
  const formContainer = createElement("div", {
    className: "selectContainer",
  });

  const eventFormClassName = "eventForm";

  const onFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const meeting = mapFormData(formData);

    try {
      calendarService.createMeeting(meeting);
      alert("meeting was successfully created");
      form.reset();
    } catch (error) {
      alert("You cannot create more than one meeting in the same day and time");
    }
  };

  const form = createElement("form", {
    className: eventFormClassName,
    onsubmit: onFormSubmit,
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
