import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Elevation, Button } from '@blueprintjs/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import blue from '@material-ui/core/colors/blue';

const JoinTeam = props => {
	return (
		<div className="onboarding">
			<Card
				interactive={false}
				elevation={Elevation.THREE}
				className="onboardingCard"
			>
				<h3> Enter Join Code (provided by your manger):</h3>
				<FormControl>
					<InputLabel
						htmlFor="custom-css-standard-input"
						style={{
							color: blue[500],
							root: {
								'&$cssFocused': {
									color: blue[500]
								}
							},
							focused: {}
						}}
					>
						Join Code
					</InputLabel>
					<Input
						id="custom-css-standard-input"
						style={{
							width: '200px',
							margin: '10px 0',
							color: blue[500],
							underline: {
								'&:after': {
									borderBottomColor: blue[500]
								}
							}
						}}
						type="text"
						name="joinCode"
						onChange={props.changeHandler}
					/>
				</FormControl>
				<Button onClick={props.submitHandler}>Join Team</Button>
			</Card>

			<Button onClick={props.createToggle}>Create Team</Button>
			<Button onClick={props.toggleAllOff}>Cancel</Button>

			{props.error.length > 0 && (
				<div className="errorModal">
					<Card className="errorJoinCard onboardingCard">
						<button onClick={props.clearError}>X</button>
						<h3>Oops...</h3>
						<div>{props.error}</div>
					</Card>
				</div>
			)}
		</div>
	);
};

export default JoinTeam;
