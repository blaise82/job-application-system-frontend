import React, { Component, Profiler } from 'react';
import { BrowserRouter as Router, Switch, Route, IndexRoute } from 'react-router-dom';
import Login from '../views/Login.View';
import Home from '../components/Home';
import DashboardRoot from '../views/Dashboard';

export default class index extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Login} />
                <DashboardRoot>
					<Route
						component={({ match }) => (
							<div>
								<Route path="/dashboard" exact component={Home} />
							</div>
						)}
					/>
				</DashboardRoot>
			</Switch>
		);
	}
}
