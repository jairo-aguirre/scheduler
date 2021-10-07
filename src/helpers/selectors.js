export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];

  const targetDay = state.days.find(item => item.name === day);

  if (!targetDay) return [];

  return targetDay.appointments.map(appointment => state.appointments[appointment]);
};

export function getInterview(state, interview) {
  if (!interview) return null;

  const interviewerID = interview.interviewer;
  const newInterviewObj = {};

  newInterviewObj.student = interview.student;
  newInterviewObj.interviewer = state.interviewers[interviewerID];

  return newInterviewObj;
};

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) return [];

  const targetDay = state.days.find(item => item.name === day);

  if (!targetDay) return [];

  return targetDay.interviewers.map(interviewer => state.interviewers[interviewer]);
};