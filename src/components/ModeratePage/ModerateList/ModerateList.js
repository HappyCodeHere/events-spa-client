import React, { PropTypes } from 'react';

import ModerateListItem from './ModerateListItem';

import './ModerateList.scss';


const propTypes = {
  events: PropTypes.array.isRequired,
}

const ModerateList = ({ events }) => {
  return (
    <div className="moderate-list">
      {events.map(item => {
        const { id, text } = item;
        return (
          <ModerateListItem
            key={id}
            text={text}
          />
        )
      })}
    </div>
  )
}

ModerateList.propTypes = propTypes;

export default ModerateList;
