import React from 'react';
import styled from 'styled-components'
import {INotification} from '../../common/types';

const StyledNotification = styled.section`
	border: solid 3px #0367A6;
	border-radius: 1em;
	margin: 0.75em;
	overflow: hidden;
	justify-content: center;
`;

type NotificationProps = {
	data: INotification;
}

const Notification: React.FC<NotificationProps> = ({ data }) => {
	let notificationType = data.approve ? "notification__approve" : "notification__deny";
	
	return (
		<StyledNotification>
			<h3 className="block pt-4 px-5">Flight Status</h3>
			<div className="flex flex-col h-1/2 justify-center my-8 relative px-8">
				{data.approve !== undefined && (
						<p className={`notification__message ${notificationType}`}>
								{data.message}
						</p>
				)}
			</div>
		</StyledNotification>
	)
};
 
export default Notification;