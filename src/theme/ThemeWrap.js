import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { purple, blue } from '@mui/material/colors';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ThemeWrap = (props) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: purple[400],
			},
			secondary: {
				main: blue[500],
			},
		},
	});

	return (
		<>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</>
	);
};

export default ThemeWrap;
