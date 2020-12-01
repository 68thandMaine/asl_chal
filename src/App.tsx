import React, { useState } from 'react';
import './App.css';
import './tailwind.css';
import LeafletMap from './components/map/LeafletMap';
import Notification from './components/notification/Notification';
import Dashboard from './views/Dashboard';
import Menu from './components/menu/Menu';
import initialState from './common/initialState';
import { IStateMap } from './common/types';

function App() {
	let [state, setState] = useState<IStateMap>(initialState)
	
	const renderNotification = () => {
		return (
			<Notification
				message={state.notification.message}
			/>
		)
	}

	function onShowNotification(approval: boolean, area?: string) {
		let msg = approval ? "Good news! Your flight has been approved." : `Your flight breaches about ${area} kms of controlled airspace. Please try to find another route.`;
		setState({
      ...state,
      notification: {
        message: msg,
				showNotification: true	
      }
		});
	}

	function onCloseNotification(){
		setState((prevState) => ({
			...prevState,
			notification: {
				showNotification: false,
				message: "",
			}
		}));
	}

	return (
		<Dashboard
			leftPane={
				<LeafletMap
					mapCoordinates={state.map.startingCoordinates}
					mapUrl={state.map.mapUrl}
					createNotification={onShowNotification}
					closeNotification={onCloseNotification}
					controlledAirspace={state.map.controlledAirspace}
				/>
			}
			rightPane={
				<Menu
					notificationData={state.notification}
				/>
			}
		>
		</Dashboard>
  );
}

export default App;
