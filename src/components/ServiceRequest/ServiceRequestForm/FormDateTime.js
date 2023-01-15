import React from 'react';
import dayjs from 'dayjs';

//MUI
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const FormDateTime = (props) => {
	const value = dayjs(props.dateVal).subtract(8, 'hours');

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateTimePicker
					renderInput={(props) => <TextField {...props} fullWidth />}
					label="Date & Time"
					value={value}
					onChange={(newValue) => {
						props.setDateHandler(newValue);
					}}
				/>
			</LocalizationProvider>
		</>
	);
};

export default FormDateTime;
