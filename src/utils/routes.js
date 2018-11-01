import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import routes from '../routes.js';

class AppRoutes extends Component{
	render(){
		return (
			<Switch>
				{routes.map((route, i) => <Route key={i} {...route} />)}
			</Switch>
		);		
	};
}

//export default {AppRoutes as Routes}
export default AppRoutes