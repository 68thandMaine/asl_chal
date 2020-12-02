import React, { useState } from 'react';
import './App.css';
import './tailwind.css';
import LeafletMap from './components/map/LeafletMap';
import Dashboard from './views/Dashboard';
import Menu from './components/menu/Menu';
import initialState from './common/initialState';
import { IStateMap } from './common/types';

function App() {
	let [state, setState] = useState<IStateMap>(initialState)
	
	function onShowNotification(approval: boolean, area?: string) {
		let msg = approval ? "Good news! Your flight has been approved." : `Your flight breaches about ${area} kms of controlled airspace. Please try to find another route.`;
		setState({
      ...state,
      notification: {
				approve: approval,
        message: msg,
				showNotification: true	
      }
		});
	}

	function onCloseNotification(){
		console.log("close notification")
		setState({
			...state,
			notification: {
				...state.notification,
				showNotification: false,
				message: "",
			}
		});
		console.log(state)
	}

	return (
		<Dashboard
			leftPane={
				<LeafletMap
					mapCoordinates={state.map.startingCoordinates}
					mapUrl={state.map.mapUrl}
					controlledAirspace={state.map.controlledAirspace}
					createNotification={onShowNotification}
					closeNotification={onCloseNotification}
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
