import React, { useEffect, useState } from 'react';
import './App.css';
import './tailwind.css';

import LeafletMap from './components/map/LeafletMap';
import Notification from './components/notification/Notification';

function App() {
	const [showNotification, setShowNotification] = useState<boolean>(false)
	const[notificationMessage, setNotificationMessage] = useState<string>("");
	
	const renderNotification = () => {
		return (
			<Notification
				message={notificationMessage}
			/>
		)
	}

	function onShowNotification(approval: boolean, area?: string) {
		console.log("approval: ", approval)
		let msg = approval ? "Good news! Your flight has been approved." : `Your flight breaches about ${area} kms of controlled airspace. Please try to find another route.`;
		setShowNotification(true);
		setNotificationMessage(msg);
	}

	return (
		<>
			<LeafletMap 
				createNotification={onShowNotification}
				closeNotification={setShowNotification}
			/>
			{showNotification && renderNotification()}
		</>
  );
}

export default App;
