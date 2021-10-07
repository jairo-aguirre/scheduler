import React from "react";
import 'components/Appointment/styles.scss';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const Appointment = (props) => {
  // props.interview ? useVisualMode(SHOW) : useVisualMode(EMPTY);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />} */}
      {/* {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />} */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          name="Jairo Aguirre"
          interviewer={1}
          interviewers={props.interviewers}
          // onSave={onSave}
          onCancel={back}
        />
      )}
    </article>
  );
};

export default Appointment;