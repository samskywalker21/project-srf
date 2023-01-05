import React, { useState } from 'react';

//MUI
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const FormDateTime = () => {
	const [value, setValue] = useState();

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateTimePicker
					renderInput={(props) => <TextField {...props} fullWidth />}
					label="DateTimePicker"
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
