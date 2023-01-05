import React from 'react';

//Components
import FormDateTime from './FormDateTime';

//MUI
import { Grid, TextField, InputAdornment } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';

const ServiceRequestForm = () => {
	return (
		<form>
			<Grid container spacing={2}>
				<Grid item md={12} sm={12} xs={12}>
					<FormDateTime />
				</Grid>
				<Grid item md={12} sm={12} xs={12}>
					<TextField
						id="pc-number"
						label="PC Number"
						variant="outlined"
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<ComputerIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default ServiceRequestForm;
