import React, { PropTypes } from 'react';

import ModerateList from './ModerateList/ModerateList'

import './Moderate.scss';


const propTypes = {
  // events
  // moderateEvent

}

const Moderate = ({ events, moderateEvent }) => {
  return (
    <div className="moderate">
      <ModerateList events={events} moderateEvent={moderateEvent} />

    </div>
  )
}

Moderate.propTypes = propTypes;

export default Moderate;
