import React, { PropTypes } from 'react';

import SocialButtons from './SocialButtons/SocialButtons';

import './AboutPage.scss';


const propTypes = {

}

const AboutPage = () => {
  return (
    <div className="about-page">
      <h3>О приложении</h3>
      <p>Все бесплатные мероприятия в одном месте)</p>
      <h5>Поделись с друзьями!</h5>
      <SocialButtons />
    </div>
  )
}

AboutPage.propTypes = propTypes;

export default AboutPage;
