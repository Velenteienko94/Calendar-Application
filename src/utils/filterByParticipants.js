import { createDropdown } from "../components/dropdown";
import calendar from "./calendar";
/**
 *
 * @param {*}
 */
export function filterByParticipants(participantName) {
  calendar.forEach((day) => {
    const meetingSlots = day.filter((name, index) => {
      // name === participantName;
      const meeting = {
        meetingDay: day,
        meetingTime: index,
        participant: participantName,
      };
      const meetings = [];
      meetings.push(meeting);
    });
  });
  calendar.reduce(() => {});
  return;
}

// name = select.onchange
