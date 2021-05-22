import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage          from 'pages/HomePage/HomePage';

import 'App.css';

const App = () => (
	<div>
		<Switch>
			<Route exact path="/" component={HomePage} />
		</Switch>
	</div>
);

export default App;
