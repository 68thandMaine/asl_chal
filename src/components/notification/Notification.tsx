import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {INotification} from '../../common/types';

const StyledNotification = styled.section`
	border: solid 3px #0367A6;
	border-radius: 1em;
	margin: 0.75em;
	overflow: scroll;
	justify-content: center;
`;

type NotificationProps = {
	data: INotification;
}

const Notification: React.FC<NotificationProps> = ({ data }) => {
	const [notificationType, setNotificationType] = useState<string | null>(null);
	
	useEffect(() => {
		if( data.approve || data.showNotification ) {
			let { approve } = data;
			let notification = approve ? "notification__approve" : "notification__deny";
			setNotificationType(notification)
		}
		if(!data.showNotification && notificationType !== null) {
			setNotificationType("notification__remove")
		}
	}, [data, notificationType])
	 
	
	return (
		<StyledNotification>
			<h3 className="block pt-4 px-5">Flight Status</h3>
			<div className="flex flex-col h-1/2 justify-center relative my-8 ml-10 pr-4">
				{data.approve !== undefined && (
						<p className={`notification__message relative ${notificationType}`}>
								{data.message}
						</p>
				)}
			</div>
		</StyledNotification>
	)
};
 
export default Notification;