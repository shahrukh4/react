import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet'
//import MdKeyboardBackspace from 'react-icons/lib/md/keyboard-backspace';
import {withRouter} from 'react-router-dom'
import {env} from '../../env';
import FaMusic from 'react-icons/lib/md/queue-music';
//import FaMapMarker from 'react-icons/lib/md/contacts';
//import FaSignOut from 'react-icons/lib/md/exit-to-app';
import FaHeart from 'react-icons/lib/ti/heart-outline';
import FaBell from 'react-icons/lib/ti/bell';
//import FaBars from 'react-icons/lib/go/three-bars';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

const styles = {
	height: {
		height:53,
	}
}

const logo = `${env.bucketUrl}static/logo.svg`;
const homeSvg = `${env.bucketUrl}static/menuicons/home.svg`;
const profileSvg = `${env.bucketUrl}static/menuicons/profile.svg`;
const walletSvg = `${env.bucketUrl}static/menuicons/wallet.svg`;
const eventSvg = `${env.bucketUrl}static/menuicons/event.svg`;
const musicSvg = `${env.bucketUrl}static/menuicons/music.svg`;
const settingSvg = `${env.bucketUrl}static/menuicons/setting.svg`;
const contactSvg = `${env.bucketUrl}static/menuicons/contact.svg`;
const logoutSvg = `${env.bucketUrl}static/menuicons/logout.svg`;
const sharingImage = `${env.bucketUrl}static/votemix-share-placeholder.jpg`;
const logoIcon = `${env.bucketUrl}static/logo-icon.svg`;


class Header extends React.Component{
	constructor(props){
        super(props);
        const { dispatch } = this.props;
    }

	genrateGlobalMetaTags() {
        return (
        	<Helmet>
                <title>VoteMix</title>
                <meta name="Description" content="Manage your events and much more for free with VoteMix.com Join Now!" />
                <meta name="Keywords" content="votemix, party app, pwa, events app, near by events" />
                <meta property="og:title" content="VoteMix" />
                <meta property="og:site_name" content="VoteMix" />
                <meta property="og:url" content="https://www.votemix.com/" />
                <meta property="og:description" content="Manage your events and much more for free with VoteMix.com Join Now!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://votemix-test.s3.us-east-1.amazonaws.com/static/votemix-share-placeholder.jpg" />
            </Helmet>
        );
    }

	render(){
		let {user, header, history} = this.props,
		{current_url} = this.state

		return (
			<div style={styles.height}>
				<header>
					{this.genrateGlobalMetaTags() }
					{header.request_loader === true &&
						<div className="logo">Loading...</div>
					}
					{header.header_options.type === 'full' &&
						<div className="logo"> 
							<Link to="/"><img alt="votemix-logo" src={logo} className="full-logo" /></Link>
						</div>
					}    
					{(header.header_options.type === 'inner' && typeof(header.header_options.edit_event_step) !== 'undefined') &&
						<div className="logo"> 
							{header.header_options.edit_event_step === 2 ?
								<span className="link"><MdKeyboardBackspace /></span>:
								<span className="link"><MdKeyboardBackspace /></span>
							}
							<img src={logoIcon} alt="logo Icon" />
							<span className="noTranslate">{header.header_options.title}</span>
						</div>
					}
					{(header.header_options.type === 'inner' && typeof(header.header_options.edit_event_step) === 'undefined') &&
						<div className="logo"> 
							{header.header_options.back_url !== '' ?
								<span className="link" onClick={() => history.push(header.header_options.back_url)}><MdKeyboardBackspace/></span>:
								<span className="link" onClick={() => history.goBack()}><MdKeyboardBackspace/></span>
							}
							<img src={logoIcon} alt="logo Icon" />
							<span className="noTranslate">{header.header_options.title}</span>
						</div>
					}


					{ user.authenticated === false && 
						<div>
							<span className="login-btn" onClick={(e) => history.push('/login')  }>Login</span>
						</div>
					}

					<div>
						<div className="navigation">
						<div className="mobile-nav">
						<ul>
							{ user.authenticated === true && (user.auth.settings) && (Number(user.auth.settings.match_making) === 1) && (user.authenticated === true) &&
								<li className="event">
									<Link to="/match-making-events" rel="match-making">
									<FaHeart  className="heart-icon" />
									</Link>
								</li>
							}
							{ user.authenticated === true  &&
								<li className="notification">
								<Link to="/notification"  rel="notification" >
								<FaBell/>
								<span className={current_url !== '/notification' && user.notifications_count > 0 ? "badge" : 'hidden'}>
								<span className="noTranslate">{user.notifications_count > 99 ? '99+' : user.notifications_count}</span>
								</span>
								</Link>
								</li>
							}
							{ user.authenticated === true && 
								<li className="menu-button" onClick={this.handleToggle}>
							
								</li>
							}
						</ul>
					</div>
					</div>
					{ user.authenticated === true &&
					<Drawer docked={false} overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.74)'}} openSecondary={true} width={250} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
					<div className="avatar">
					<ListItem
					disabled={true}
					style={{paddingLeft:0}}
					leftAvatar={
					<Avatar className="link" onClick={() => this.profile()} src={user.auth.profile_image} size={80} />
					}
					>
					<span className="link author-name noTranslate" onClick={() => this.profile()}>
					<Link to="#/">{user.auth.name}</Link>
					</span>

					</ListItem>

					</div>
					<ul className="toggle-nav">

					<li onClick={this.handleClose}><Link to="/"><img alt="Home" src={homeSvg} /><span>Home</span></Link></li>
					<li onClick={this.handleClose}><Link to={`/${user.auth.slug}`}><img alt="Profile" src={profileSvg} /><span>Profile</span></Link></li>
					<li onClick={this.handleClose}><Link to="/wallet"><img alt="My Wallet" src={walletSvg} /><span>My Wallet</span></Link></li>
					<li onClick={this.handleClose}><Link to="/events/created"><img alt="My Events" src={eventSvg} /><span>My Events</span></Link></li>
					<li onClick={this.handleClose}><Link to="/music"><img alt="My Music" src={musicSvg} /><span>My Music</span></Link></li>
					<li onClick={this.handleClose}><Link to="/setting"><img alt="Settings" src={settingSvg} /><span>Settings</span></Link></li>
					<li onClick={this.handleClose}><Link to="/contact-us"><img alt="Contact us" src={contactSvg} /><span>Contact us</span></Link></li>
					<li onClick={this.handleClose}><a className="link" onClick={this.logout}><img alt="logout" src={logoutSvg} /><span>Log Out</span></a></li>


					</ul>
					</Drawer>
					}
					</div>
				</header>
			</div>
        );
	}
}


export {Header}