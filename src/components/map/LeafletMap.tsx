import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, FeatureGroup, useMap } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet-draw';
import DrawToolBar from './DrawToolBar';
import { FeatureCollection } from '@turf/turf';
import geoJsonData from '../../assets/geoJsonData';

const MapWrapper= styled(MapContainer)`
	height: 720px;
	width: 100%;
`;

interface ILeafletMap {
	createNotification: (approval: boolean) => void;
	closeNotification: (bool :boolean) => void
}

const LeafletMap: React.FC<ILeafletMap> = ({ createNotification, closeNotification }) => {
	
	function onReceiveData(data: FeatureCollection) {
		const { features } = data;
		(features.length !== 0 ) ? createNotification(false) : createNotification(true)
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
					determineNotification={onReceiveData}
					closeNotification={closeNotification} />
			</FeatureGroup>
		</MapWrapper>
	)
}

export default LeafletMap;