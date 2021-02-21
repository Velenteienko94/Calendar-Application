import { createTableRow } from "./components/table-row";
import "./global.scss";
import { timeSlots } from "./utils/calendar";
import { weekDays } from "./utils/calendar";
import { createTableCell } from "./components/table-cell";
import { createTableHeader } from "./components/table-header";
import { createToolbar } from "./components/toolbar";
import { createElement } from "./utils/createElement";
import { createEvent } from "./utils/createEvent";
import calendar from "./utils/calendar";
// import storageEvent from "./components/form";

const calendarContainer = document.getElementById("calendarContainer");
const calendarTable = createElement("table", { id: "calendar" });
calendarContainer.appendChild(createToolbar());
calendarContainer.appendChild(calendarTable);

const headers = [
  createTableHeader({ innerText: "Time Slot" }),
  ...weekDays.map((day) => {
    const header = createTableHeader({
      innerText: day.slice(0, 3),
    });

    return header;
  }),
];

const headersRow = createTableRow(headers);
calendarTable.appendChild(headersRow);
// console.log(timeSlots);
timeSlots.forEach((value, timeIndex) => {
  const timeSlot = createTableCell({
    innerText: value,
    className: "timeSlot-cell",
  });
  const cells = [timeSlot];
  // console.log(weekDays);
  weekDays.forEach((el, dayIndex) => {
    cells.push(calendar[dayIndex][timeIndex].cell);
  });
  calendarTable.appendChild(createTableRow(cells));
});

const meetings = JSON.parse(localStorage.getItem("meetings"));

for (const meeting of meetings) {
  createEvent(
    calendar,
    meeting.eventName,
    meeting.day,
    meeting.time,
    meeting.participants
  );
}
