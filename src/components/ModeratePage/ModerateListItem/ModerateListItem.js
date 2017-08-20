import React, { PropTypes } from 'react';

import './ModerateListItem.scss';


const propTypes = {
  text: PropTypes.string.isRequired,
}

const ModerateListItem = ({ text }) => {
  return (
    <div className="moderate-list-item">
      <p dangerouslySetInnerHTML={ {__html: text} }></p>
    </div>
  )
}

ModerateListItem.propTypes = propTypes;

export default ModerateListItem;
