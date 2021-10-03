import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

const DayListItem = (props) => {
  const dayClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': !props.spots
  });

  const formatSpots = () => {
    let spotsFormatted = '';

    props.spots ? spotsFormatted = '1 spot remaining' : spotsFormatted = 'no spots remaining';
    if (props.spots > 1) spotsFormatted = `${props.spots} spots remaining`;

    return (<h3 className="text--light">{spotsFormatted}</h3>);
  }

  return (
    <li className={dayClass} onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      {formatSpots()}
    </li>
  );
};

export default DayListItem;