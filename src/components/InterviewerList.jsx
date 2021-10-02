import React from "react";
import 'components/InterviewerList.scss';
import InterviewerListItem from 'components/InterviewerListItem';

const InterviewerList = (props) => {
  const createInterviewerList = () => {
    const mapInterviewerList = props.interviewers.map(interviewer =>
      <InterviewerListItem
        key={interviewer.id}
        avatar={interviewer.avatar}
        name={interviewer.name}
        selected={interviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}
      />
    );

    return mapInterviewerList;
  }

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{createInterviewerList()}</ul>
    </section>
  );
};

export default InterviewerList;