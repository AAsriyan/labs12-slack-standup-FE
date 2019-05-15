import React from 'react';
import { Button, TextArea, Intent } from '@blueprintjs/core';

const InviteUser = props => {
	return (
		<div className="inviteUserBox">
			<h3>Invite a new user to your team:</h3>
			<form onSubmit={props.addUser} className="inviteUser">
				<input
					type="email"
					placeholder="Email..."
					onChange={props.changeHandler}
					name="newMemberEmail"
				/>
				<br />
				<Button type="submit">Invite</Button>
			</form>
		</div>
	);
};

export default InviteUser;
