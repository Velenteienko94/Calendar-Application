import { createElement } from "./createElement";

export const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
export const timeSlots = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const calendar = weekDays.map(() => {
  const day = timeSlots.map(() => {
    const cell = createElement("td", { className: "table-cell" });
    return cell;
  });
  return day;
});

export default calendar;
