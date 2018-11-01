import React from 'react';

import AppRoutes from './utils/routes';
import {Header, Footer} from './_components/_partials';

class App extends React.Component {
	render() {
    	return (
    		<div className="votemix-app">
	    		<Header />
	    		<AppRoutes key={this.props.user_id} {...this.props}/>
	    		<Footer />
	    	</div>
    	);
	}
}

export default App