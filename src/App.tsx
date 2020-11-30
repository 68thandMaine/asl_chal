import React, { useState } from 'react';
import './App.css';
import './tailwind.css';
import LeafletMap from './components/map/LeafletMap';
import Notification from './components/notification/Notification';
import Dashboard from './containers/Dashboard';
import Menu from './components/menu/Menu';
import { LatLng } from 'leaflet';
import initialState from './common/initialState';

interface IStateMap {
	map: {
		startingCoordinates: LatLng
		controlledAirspace: GeoJSON.FeatureCollection
		mapUrl: string
	}
	notification: {
		showNotification: boolean
		notification: string
	}
}




function App() {
	let [state, setState] = useState<IStateMap>(initialState)
	
	const renderNotification = () => {
		return (
			<Notification
				message={notificationMessage}
			/>
		)
	}

	function onShowNotification(approval: boolean, area?: string) {
		let msg = approval ? "Good news! Your flight has been approved." : `Your flight breaches about ${area} kms of controlled airspace. Please try to find another route.`;
		setState({
      ...state,
      notification: {
        notification: msg,
				showNotification: true	
      }
		});
	}

	function onCloseNotification(){
		setState((prevState) => ({
			...prevState,
			notification: {
				showNotification: false,
				notification: "",
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

				/>
			}
		>
		</Dashboard>
  );
}

export default App;
