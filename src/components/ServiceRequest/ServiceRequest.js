import React from 'react';

//Components
import ServiceRequestForm from './ServiceRequestForm/ServiceRequestForm';

//MUI
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ServiceRequest = (props) => {
	const gridProps = {
		container: true,
		justifyItems: 'center',
		sx: {
			marginTop: 10,
		},
	};

	return (
		<Grid {...gridProps}>
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<Card raised>
					<CardContent>
						<Typography variant="h5" gutterBottom>
							Service Request Form
						</Typography>
						<ServiceRequestForm />
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ServiceRequest;
