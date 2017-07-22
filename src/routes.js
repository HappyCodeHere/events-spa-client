import React from 'react';
import { Route, Redirect } from 'react-router';

import Event from './components/Event';

/*IndexRoute
Redirect*/

import App from './components/App';

export default (
	<Route path="/" component={App}>
		<Redirect from="/" to="today" />
		<Route path=":id" component={Event}/>
	</Route>
);
