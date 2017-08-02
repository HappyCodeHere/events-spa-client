import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import moment from 'moment';

import './EventDetail.scss';


const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  images: PropTypes.array,
}

const EventDetail = ({ title, text, date, images, ...rest }) => {
  console.log(document.referrer);
  console.log(window.location);
  return (
    <div className="event-detail">
      <h3>{title}</h3>
      <header>
        <Link to="/today"><span></span>Вернутся</Link>
        <span>{moment(date).lang('ru').format('HH:mm') !== '00:00' ? moment(date).lang('ru').format('D MMMM YYYY HH:mm') : moment(date).lang('ru').format('D MMMM YYYY')}</span>
      </header>
      <p dangerouslySetInnerHTML={ {__html: text} }></p>

      {images.map(item => {
        const { src, description } = item;
        return <img src={src} alt={description} />
      })}
    </div>
  )
}

EventDetail.propTypes = propTypes;

export default EventDetail;
