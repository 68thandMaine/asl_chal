import React from 'react';
import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from 'react-leaflet';
import 'leaflet-draw';
import DrawToolBar from './DrawToolBar';
import { FeatureCollection } from '@turf/turf';
import { getArea } from '../../utils/TurfUtils';
import { LatLng } from 'leaflet';

type LeafletMapProps = {
	createNotification: (approval: boolean, area?: string) => void;
	closeNotification: () => void;
	mapCoordinates: LatLng;
	mapUrl: string;
	controlledAirspace: GeoJSON.FeatureCollection
}

const LeafletMap: React.FC<LeafletMapProps> = ({ 
	createNotification,
	closeNotification,
	controlledAirspace,
	mapCoordinates,
	mapUrl,
}) => {
	
	function onReceiveData(data: FeatureCollection) {
		if (data !== null ) {
			createNotification(false, getArea(data))
		} else {
			createNotification(true)
		}
	}
	
	
	return (
		<MapContainer
			center={mapCoordinates}
			zoom={13}
			zoomControl={true}
			scrollWheelZoom={false}
			touchZoom={false}
			doubleClickZoom={false}
			id="leafletMap__wrapper"
		>
			<TileLayer
				url={mapUrl} 
			/>
			<GeoJSON
				data={controlledAirspace}
			/>
			<FeatureGroup>
				<DrawToolBar
					determineNotification={onReceiveData}
				/>
			</FeatureGroup>
		</MapContainer>
	)
}

export default LeafletMap;