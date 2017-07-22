import React, { PropTypes } from 'react';

import moment from 'moment';

import './EventItem.scss';


const propTypes = {
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  originalLink: PropTypes.string.isRequired,
  originalLinkTitle: PropTypes.string.isRequired,
}

const EventItem = ({ date, title, time, link, originalLink, originalLinkTitle }) => {
  return (
    <div className="event-item">
      <header>
        <span className="date">{date}</span>
        <h5>{title}</h5>
        <span className="time">{time}</span>
      </header>
      <a href={originalLink}>источник</a>
    </div>
  )
}

EventItem.propTypes = propTypes;

export default EventItem;
