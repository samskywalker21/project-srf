import React from 'react';

import css from './App.css';

import ThemeWrap from './theme/ThemeWrap';
import ServiceRequest from './components/ServiceRequest/ServiceRequest';

function App() {
	return (
		<ThemeWrap>
			<ServiceRequest></ServiceRequest>
		</ThemeWrap>
	);
}

export default App;
