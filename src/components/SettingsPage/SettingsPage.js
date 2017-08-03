import React, { Component, PropTypes } from 'react';

import { Checkbox } from '../common';

import './SettingsPage.scss';


const propTypes = {

}

class SettingsPage extends Component {
  constructor() {
    super();

    this.state = {
      meetupBy: true,
      eventsDevBy: true,
      imaguru: true,
      minskforfree: true,
    }

    this.handleElementsChange = this.handleElementsChange.bind(this);
  }

  componentDidMount() {
    const events = JSON.parse(localStorage.getItem('events')) || {};
    console.log(events);

    this.setState({...events});
  }

  handleElementsChange(name, value) {
    console.log(value);
    this.setState({[name]: value});
    const events = JSON.parse(localStorage.getItem('events')) || {};
    events[name] = value;
    localStorage.setItem('events', JSON.stringify(events));
  }

  render() {
    return (
      <div className="settings-page">
        <h3>Настройки</h3>
        <p>Выбери откуда хочешь получать события</p>

      <Checkbox
        name="meetupBy"
        value={this.state.meetupBy}
        onChange={this.handleElementsChange}
        text="meetup.by"
      />
      <Checkbox
        name="eventsDevBy"
        value={this.state.eventsDevBy}
        onChange={this.handleElementsChange}
        text="events.dev.by"
      />
      <Checkbox
        name="imaguru"
        value={this.state.imaguru}
        onChange={this.handleElementsChange}
        text="imaguru.by"
      />
      <Checkbox
        name="minskforfree"
        value={this.state.minskforfree}
        onChange={this.handleElementsChange}
        text="vk.com/minskforfree"
      />
      </div>
    )
  }
}

SettingsPage.propTypes = propTypes;

export default SettingsPage;
