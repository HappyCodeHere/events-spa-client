import React, { Component, PropTypes } from 'react';

import TodayPage from './TodayPage';

import axios from 'axios';
// import { API } from '../constants/config';

import Search from './Search/Search';

import './TodayPageContainer.scss';


const propTypes = {

}

class TodayPageContainer extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
      // filteredEvents: [],
      search: '',
      offset: 10,
    }

    // this.loadEvent = this.loadEvent.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.route.path === 'today'
    setTimeout(() => {
      // как обычно костыль потому что роутер не обновлялся
      // потом посмотрю
      this.loadEvents();
    }, 10);
    // this.loadEvents();
  }

  componentDidMount() {
    this.loadEvents();
  }

  handleSearch(search) {
    this.setState({search}, () => {
      this.loadEvents();
    })
  }

  loadMore() {
    this.setState({offset: this.state.offset + 10}, () => {
      this.loadEvents();
    })
  }

  loadEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || {};
    var keys = Object.keys(events);

    var filtered = keys.filter(function(key) {
        return events[key]
    });

    let sources = filtered.join(',');


    axios.get(`/events?${this.props.route.path === 'today' ? 'today=true&' : ''}&offset=${this.state.offset}&search=${this.state.search}&sources=${sources}`)
      .then(data => {
        console.log(data.data);
        this.setState({events: data.data});
        // this.setState({filteredEvents: data.data});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="today-page-container">
        <Search handleSearch={this.handleSearch} search={this.state.search} />
        <TodayPage events={
          //   (() => {
          //   // по быстрому
          //   if (this.state.events.length === 0) return this.state.events;
          //   let items = this.state.events.filter(item => {
          //     let item2 = item.title.toLowerCase();
          //     return item2.indexOf(this.state.search.toLowerCase()) !=-1;
          //   })
          //
          //   // console.log(items);
          //   return items;
          //
          // })()
          this.state.events
        } />

      <button className="btn btn-link" onClick={this.loadMore}>Показать еще</button>

      </div>
    )
  }
}

TodayPageContainer.propTypes = propTypes;

export default TodayPageContainer;
