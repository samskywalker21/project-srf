import React from 'react';

//MUI
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';

const FormDateTime = () => {
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterMoment}>
				<DateTimePicker
					label="Responsive"
					renderInput={(params) => <TextField {...params} />}
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
				/>
			</LocalizationProvider>
		</>
	);
};

export default FormDateTime;
