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

//rewright with map
const calendar = weekDays.map(() => {
  const day = timeSlots.map(() => {
    const cell = createElement("td", { className: "table-cell", cell });
    return cell;
  });
  return day;
});
// console.log(day);
// for (const day of weekDays) {
//   const dayOfWeek = [];
//   for (const time of timeSlots) {
//     const cell = createElement("td", { className: "table-cell" });
//     dayOfWeek.push({
//       meeting: [],
//       cell,
//     });
//   }
//   calendar.push(dayOfWeek);
// }

export default calendar;
