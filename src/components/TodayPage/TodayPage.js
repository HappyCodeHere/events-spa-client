import React, { PropTypes } from 'react';

import EventItem from '../parts/EventItem/EventItem';


// import './TodayPage.scss';


const propTypes = {
  events: PropTypes.array.isRequired,
}

const TodayPage = ({ events }) => {
  console.log(events);
  console.log();
  return (
    <div className="today-page">
      {window.location.pathname === '/today' ?
        <h3>Мероприятия на сегодня</h3> :
          <h3>Все мероприятия</h3>
      }

      {events.map(item => {
        const { date, title, _id, originalLink, source } = item;
        return (
          <EventItem
            key={_id}

            date={date}
            title={title}
            link={_id}
            originalLink={originalLink}
            source={source}
          />
        )
      })}
    </div>
  )
}

TodayPage.propTypes = propTypes;

export default TodayPage;
