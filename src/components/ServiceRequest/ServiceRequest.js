import React from 'react';

import ServiceRequestForm from './ServiceRequestForm';

import Container from '@mui/system/Container';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ServiceRequest = (props) => {
	return (
		<Container maxWidth="md">
			<Grid
				container
				justifyItems="center"
				sx={{
					marginTop: 10,
				}}
			>
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
		</Container>
	);
};

export default ServiceRequest;
