import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Game} from '../_components';
import {Header} from '../_components';


class App extends React.Component {
	render() {
    	return (
    		<Router>
			    <Switch>
			      <Route exact path='/' component={Game}/>
			      <Route path='/shah' component={Header}/>
			    </Switch>
			</Router>
    	);
	}
}

export {App}