import React, { PropTypes } from 'react';

import EventItem from '../parts/EventItem/EventItem';

import './TodayPage.scss';


const propTypes = {
  events: PropTypes.array.isRequired,
}

const TodayPage = ({ events }) => {
  return (
    <div className="today-page">
      <h3>Мероприятия на сегодня</h3>
      
      {events.map(item => {
        const { date, title, time, link, originalLink, originalLinkTitle } = item;
        return (
          <EventItem
            key={link}

            date={date}
            title={title}
            time={time}
            link={link}
            originalLink={originalLink}
            originalLinkTitle={originalLinkTitle}
          />
        )
      })}
    </div>
  )
}

TodayPage.propTypes = propTypes;

export default TodayPage;
