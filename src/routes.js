import React from 'react';
import { Route, Redirect } from 'react-router';

import TodayPageContainer from './components/TodayPage/TodayPageContainer';
import EventPageContainer from './components/EventPage/EventPageContainer';
import AboutPage from './components/AboutPage/AboutPage';
import SettingsPage from './components/SettingsPage/SettingsPage';

/*IndexRoute
Redirect*/

import App from './components/App';

export default (
	<Route path="/" component={App}>
		<Redirect from="" to="today" />
		<Route path="today" component={TodayPageContainer} />

		<Redirect from="event" to="today" />
		<Route path="event/:id" component={EventPageContainer} />
		<Route path="about" component={AboutPage} />
		<Route path="settings" component={SettingsPage} />
	</Route>
);

// <Route path=":id" component={Event}/>
