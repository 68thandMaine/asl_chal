import React from 'react';
import styled from 'styled-components'

interface INotification {
	message: string;
}

const StyledNotification = styled.section`
	
`;

const Notification: React.FC<INotification> = (props) => {
	return (
		<StyledNotification>
			<h1>{props.message}</h1>
		</StyledNotification>
	)
};
// 
export default Notification;