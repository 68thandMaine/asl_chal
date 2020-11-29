import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
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

function LeafletMap(props:any) {
	const { showNotification } = props;

	function onDrawCreate(evnt : any) {
		const layer = evnt.layer.toGeoJSON();
		const layerCoordinates = layer.geometry.coordinates;
		const intersection = lineIntersect(lineString(airportCoordinates), lineString(layerCoordinates));

		intersection.features.length > 1 ? createNotification(false) : createNotification(true);
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
			<DrawToolBar 
				drawCreate={onDrawCreate}
			/>
		</MapWrapper>
	)
}

export default LeafletMap;