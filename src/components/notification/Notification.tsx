import React from 'react';
import styled from 'styled-components'
import {INotification} from '../../common/types';

const StyledNotification = styled.section`
	border: solid 3px #0367A6;
	border-radius: 1em;
	padding: 1em 1.5em;
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
			<h3 className="block">Flight Status</h3>
			{data.approve !== undefined && (
				<div className="relative">
					<p className={notificationType}>
						<span className="notification__message">
							{data.message}
						</span>
					</p>
				</div>
			)}
		</StyledNotification>
	)
};
 
export default Notification;