import React, { useEffect, useState } from 'react';
import './App.css';
import './tailwind.css';

import LeafletMap from './components/map/LeafletMap';
import Notification from './components/notification/Notification';

function App() {
	const[notificationMessage, setNotificationMessage] = useState<string>("");
	
	const renderNotification = () => {
		return (
			<Notification
				message={notificationMessage}
			/>
		)
	}

	const onShowNotification = (message: string) => {
		setNotificationMessage(message);
	}

	return (
		<>
			<LeafletMap 
				showNotification={onShowNotification}
			/>
			{renderNotification()}
		</>
  );
}

export default App;
