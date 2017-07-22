import React, { PropTypes } from 'react';

import moment from 'moment';

import './EventDetail.scss';


const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  images: PropTypes.array,
}

const EventDetail = ({ title, text, date, images }) => {
  return (
    <div className="event-detail">
      <header>
        <h3>{title}</h3>
        <span>{moment(date).format("MMM Do YY")}</span>
      </header>
      <p>{text}</p>

      {images.map(item => {
        const { src, description } = item;
        return <img src={src} alt={description} />
      })}
    </div>
  )
}

EventDetail.propTypes = propTypes;

export default EventDetail;
