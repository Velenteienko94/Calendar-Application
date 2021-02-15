import { createList } from "../components/list";
/**
 *
 * @param {*}
 */
export function createEvent(
  calendar,
  nameOfEvent,
  day,
  timeSlot,
  participants = []
) {
  calendar[day][timeSlot].appendChild(createList(participants));
}
