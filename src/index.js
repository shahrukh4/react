import React from 'react';
import ReactDOM from 'react-dom';
//import {Loadable} from 'react-loadable';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Router, Switch} from 'react-router-dom'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app';
import {history} from './_helpers';

/*const muiTheme = getMuiTheme({
	pallete : {
		textColor : '#000',
		primary1Color : '#f58121',	
	}
});*/

ReactDOM.render(	
	<div>
		<Router history={history}>
			<Switch>
				<App />
			</Switch>
		</Router>
	</div>
	, document.getElementById('root')
);
