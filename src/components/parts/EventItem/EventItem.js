import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
  console.log(link);
  return (
    <div className="event-item">
      <header>
        <span className="date">{moment(date).lang('ru').format('D MMMM YYYY')}</span>
        <Link to={`/event/${link}`}>{title}</Link>
        <span className="time">{moment(date).lang('ru').format('HH:mm') !== '00:00' ? moment(date).lang('ru').format('HH:mm') : 'Время не указано'}</span>
      </header>
      <p className="source">Источник: <a href={originalLink}>{originalLinkTitle}</a></p>

    </div>
  )
}

EventItem.propTypes = propTypes;

export default EventItem;
