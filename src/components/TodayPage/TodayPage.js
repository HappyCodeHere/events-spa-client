import React, { PropTypes } from 'react';

import EventItem from '../parts/EventItem/EventItem';


// import './TodayPage.scss';


const propTypes = {
  events: PropTypes.array.isRequired,
}

const TodayPage = ({ events }) => {
  console.log(events);
  return (
    <div className="today-page">
      <h3>Мероприятия на сегодня</h3>

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
