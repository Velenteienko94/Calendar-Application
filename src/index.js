import { createTableRow } from "./components/table-row";
import "./global.scss";
import { timeSlots } from "./utils/calendar";
import { weekDays } from "./utils/calendar";
import { createTableCell } from "./components/table-cell";
import { createTableHeader } from "./components/table-header";
import { createToolbar } from "./components/toolbar";
import { createElement } from "./utils/createElement";

const calendarContainer = document.getElementById("calendarContainer");
const calendarTable = createElement("table", { id: "calendar" });
console.log(createToolbar());
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
timeSlots.forEach((value) => {
  const timeSlot = createTableCell({
    innerText: value,
    className: "timeSlot-cell",
  });
  const cells = [timeSlot];
  weekDays.forEach(() => {
    cells.push(createTableCell({ className: "table-cell" }));
  });
  calendarTable.appendChild(createTableRow(cells));
});
