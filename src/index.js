import { createTableRow } from "./components/table-row";
import "./global.scss";
import { timeSlots } from "./utils/calendar";
import { weekDays } from "./utils/calendar";
import { createTableCell } from "./components/table-cell";
import { createTableHeader } from "./components/table-header";

const calendarContainer = document.getElementById("calendar");

const headers = [
  createTableHeader({ innerText: "Time Slot" }),
  ...weekDays.map((day) => {
    const header = createTableHeader({
      innerText: day,
    });

    return header;
  }),
];
const headersRow = createTableRow(headers);
calendarContainer.appendChild(headersRow);
timeSlots.forEach((value, index) => {
  const timeSlot = createTableCell({
    innerText: value,
    className: "table-cell",
  });
  const cells = [timeSlot];
  weekDays.forEach(() => {
    cells.push(createTableCell({ innerText: timeSlots[index] }));
  });
  calendarContainer.appendChild(createTableRow(cells));
});
