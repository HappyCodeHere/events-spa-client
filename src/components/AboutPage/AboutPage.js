import React, { PropTypes } from 'react';

import SharedButtons from './ShareButtons/ShareButtons';

import './AboutPage.scss';


const propTypes = {

}

const AboutPage = () => {
  return (
    <div className="about-page">
      <h3>О приложении</h3>
      <p>Все бесплатные мероприятия в одном месте)</p>
      <h5>Поделись с друзьями!</h5>
      <br/>
      <h4>не работает пока</h4>
      <SharedButtons />
    </div>
  )
}

AboutPage.propTypes = propTypes;

export default AboutPage;
