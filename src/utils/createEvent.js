import { createList } from "../components/list";
/**
 *
 * @param {*}
 */
export function createEvent(calendar, eventName, day, time, participants) {
  calendar[day][time].cell.appendChild(createList(eventName));
  calendar[day][time].meeting = participants;
}
