import React from "react";
import 'components/InterviewerList.scss';
import InterviewerListItem from 'components/InterviewerListItem';

const InterviewerList = (props) => {
  const createInterviewerList = () => {
    const interviewers = props.interviewers.map(interviewer =>
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
    );

    return interviewers;
  }

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{createInterviewerList()}</ul>
    </section>
  );
};

export default InterviewerList;