import React from 'react';
import { MapContainer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [
	-83.35447311401367,
	42.23982914405
]

const LeafletMap : React.FC = () => {
	return (
		<MapContainer
			id="mapId"
			center={defaultLatLng}
			zoom={13}>
			

		</MapContainer>
	)
};

export default LeafletMap;