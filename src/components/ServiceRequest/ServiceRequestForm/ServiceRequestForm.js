import React, { useState } from 'react';
import dayjs from 'dayjs';

//Components
import FormDateTime from './FormDateTime';

//MUI
import { Grid, TextField, InputAdornment } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';

const ServiceRequestForm = () => {
	const [dateVal, setDateVal] = useState(
		dayjs().format('MMMM DD, YYYY HH:mm:ss')
	);

	const setDateHandler = (newValue) => {
		setDateVal(newValue.format('MMMM DD, YYYY HH:mm:ss'));
		console.log(dateVal);
		const test = dayjs(dateVal)
			.add(72, 'hour')
			.format('MMMM DD, YYYY HH:mm:ss');
		console.log(test);
	};

	const pcNumProps = {
		id: 'pc-number',
		label: 'PC Number',
		variant: 'outlined',
		fullWidth: true,
		max: 999,
		InputProps: {
			startAdornment: (
				<InputAdornment position="start">
					<ComputerIcon />
				</InputAdornment>
			),
		},
	};

	return (
		<form>
			<Grid container spacing={2}>
				<Grid item md={12} sm={12} xs={12}>
					<FormDateTime setDateHandler={setDateHandler} dateVal={dateVal} />
				</Grid>
				<Grid item md={12} sm={12} xs={12}>
					<TextField {...pcNumProps} />
				</Grid>
			</Grid>
		</form>
	);
};

export default ServiceRequestForm;
