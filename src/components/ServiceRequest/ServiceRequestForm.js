import React from 'react';

import { Grid, TextField } from '@mui/material';

const ServiceRequestForm = () => {
	return (
		<form>
			<Grid container spacing={2}>
				<Grid item md={12} sm={12} xs={12}>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item md={12} sm={12} xs={12}>
					<TextField
						required
						id="outlined-required"
						label="Required"
						defaultValue="Hello World"
						fullWidth
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default ServiceRequestForm;
