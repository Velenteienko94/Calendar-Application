import { meetings } from "../constants";
/**
 *
 * @param {HTMLSelectElement}
 */
export function getSelectedOptionsIndex(selectedForm) {
  const SelectedOptionsIndex = [];
  for (const option of selectedForm.options) {
    if (option.selected) {
      SelectedOptionsIndex.push(option.index);
      return SelectedOptionsIndex;
    }
  }
  return SelectedOptionsIndex;
}
/**
 *
 * @param {HTMLSelectElement}
 */
export function getSelectedOptionsValue(selectedForm) {
  const SelectedOptionsValue = [];
  for (const option of selectedForm.options) {
    if (option.selected) {
      SelectedOptionsValue.push(option.value);
      continue;
    }
  }
  return SelectedOptionsValue;
}
/**
 *
 * @param {string, array, array, array}
 */
export function createMeeting(NameOfEvent, participants, day, time) {
  const meeting = {};
  meeting["name"] = NameOfEvent;
  meeting["participants"] = participants;
  meeting["day"] = day;
  meeting["time"] = time;
  return meetings.push(meeting);
}
