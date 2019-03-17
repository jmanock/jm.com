import React, { Fragment } from 'react';
import Uploader from './Components/uploader';
import CalendarTest from './Components/Calendar/CalendarTest';
import Navbar from './Components/NavBar';
import './App.css';

const App = () => {
	return(
		<Fragment>
			<Navbar />
			<div className='header_bg'></div>
			<br />
			<br />
			<Uploader />
			<br />
			<CalendarTest />
		</Fragment>

	);
};

export default App
