import React from 'react';

import css from './App.css';

//MUI
import { Container } from '@mui/material';

//Components
import ThemeWrap from './theme/ThemeWrap';
import ServiceRequest from './components/ServiceRequest/ServiceRequest';

function App() {
	return (
		<ThemeWrap>
			<Container maxWidth="md">
				<ServiceRequest></ServiceRequest>
			</Container>
		</ThemeWrap>
	);
}

export default App;
