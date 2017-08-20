import React, { Component, PropTypes } from 'react';

import { Loader } from 'common';

import './ModerateContainer.scss';


const propTypes = {

}

class ModerateContainer extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
      totalCount: null,
    }
  }

  loadModerateEvents() {
    axios.get(`${API}/`)
      .then(data => {
        const { events ,totalCount } = data.data;
        this.setState({
          events: events,
          totalCount: totalCount,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="">
        {this.state.events.length }
      </div>
    )
  }
}

ModerateContainer.propTypes = propTypes;

export default ModerateContainer;
