import { createTableRow } from "./components/table-row";
import "./global.scss";
import calendar, { timeSlots } from "./utils/calendar";
import { createElement } from "./utils/createElement";

const calendarContainer = document.getElementById("calendar");
// rewright with map
// const timeEtalons = timeSlots.map((time, index) => {
//   const timeSlot = createElement("td", { innerText: time });
//   const cells = [timeSlot];
//   const dayTime = calendar.map((day, index) => {
//     cells.push(day[index].cell);
//   });
//   calendarContainer.appendChild(createTableRow(cells));
// });
timeSlots.map((value, index) => {
  const timeSlot = createElement("td", { innerText: value });
  const cells = [timeSlot];
  const calendarDay = calendar.map(() => {
    return cells;
  });

  calendarContainer.appendChild(createTableRow(cells));
  return calendarDay;
});

// for (const [timeIndex, time] of timeSlots.entries()) {
//   const timeSlot = createElement("td", { innerText: time });
//   const cells = [timeSlot];
//   console.log(cells);
//   for (const day of calendar) {
//     cells.push(day[timeIndex].cell);
//   }
//   calendarContainer.appendChild(createTableRow(cells));
// }
