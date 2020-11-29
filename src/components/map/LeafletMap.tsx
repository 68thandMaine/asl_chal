import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet-draw';
import DrawToolBar from './DrawToolBar';
import { lineIntersect, lineString } from '@turf/turf';

import geoJsonData from '../../assets/geoJsonData';
const airportCoordinates = geoJsonData.features[0].geometry.coordinates[0];

const MapWrapper= styled(MapContainer)`
	height: 720px;
	width: 100%;
`;

interface ILeafletMap {
	showNotification: (message: string) => void
}

const LeafletMap: React.FC<ILeafletMap> = ({ showNotification }) => {

	function onRecieveDrawData(evnt : any) {

		console.log(evnt)
		
	}

	function createNotification(intersect: boolean) {
		let msg = intersect ? "Good news! Your flight has been approved." : "Your flight enters controlled airspace. Try finding another route."
		showNotification(msg);
	}
	
	return (
		<MapWrapper
			center={[42.216, -83.355]}
			zoom={12}
			zoomControl={false}
			scrollWheelZoom={false}
		>
			<TileLayer
				url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" 
			/>
			<GeoJSON
				data = {geoJsonData}
			/>
			<FeatureGroup>
				<DrawToolBar
					determineNotification={onRecieveDrawData} />
			</FeatureGroup>
		</MapWrapper>
	)
}

export default LeafletMap;