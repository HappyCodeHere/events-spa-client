import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import SocialButtons from './SocialButtons/SocialButtons';
import FeedbackForm from './FeedbackForm/FeedbackForm';

import './AboutPage.scss';


const propTypes = {

}

const AboutPage = () => {
  return (
    <div className="about-page">
      <h3>О приложении</h3>
      <p>Все бесплатные мероприятия в одном месте)</p>
      <p>Мероприятия собираются автоматически, так что ты точно ничего не пропустишь.</p>
      <p>Откуда получать меприятия можно выбрать в <Link to="/settings">настройках</Link></p>
      <h5>Поделись с друзьями!</h5>
      <SocialButtons />
      <FeedbackForm />
    </div>
  )
}

AboutPage.propTypes = propTypes;

export default AboutPage;
