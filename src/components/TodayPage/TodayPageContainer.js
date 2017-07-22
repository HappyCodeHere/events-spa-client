import React, { Component, PropTypes } from 'react';

import TodayPage from './TodayPage';

import axios from 'axios';
import { API } from '';

import './TodayPageContainer.scss';


const propTypes = {

}

class TodayPageContainer extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    this.loadEvent();
  }

  loadEvents() {
    axios.get(`${API}/`)
      .then(data => {
        this.setState({events: data.data});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="today-page-container">

      </div>
    )
  }
}

TodayPageContainer.propTypes = propTypes;

export default TodayPageContainer;
