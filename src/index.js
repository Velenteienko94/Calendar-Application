import { createTableRow } from "./components/table-row";
import "./global.scss";
import { timeSlots } from "./utils/calendar";
import { weekDays } from "./utils/calendar";
import { createTableCell } from "./components/table-cell";
import { createTableHeader } from "./components/table-header";
import { createToolbar } from "./components/toolbar";
import { createElement } from "./utils/createElement";
// import { cerateForm } from "./components/form";
// import { createEvent } from "./utils/createEvent";
import calendar from "./utils/calendar";

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
timeSlots.forEach((value, timeIndex) => {
  const timeSlot = createTableCell({
    innerText: value,
    className: "timeSlot-cell",
  });
  const cells = [timeSlot];
  weekDays.forEach((el, dayIndex) => {
    cells.push(calendar[dayIndex][timeIndex].cell);
  });
  calendarTable.appendChild(createTableRow(cells));
});

// const createEventBtn = document.getElementById("createEventBtn");
