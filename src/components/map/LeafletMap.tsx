import React from 'react';
import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet-draw';
import DrawToolBar from './DrawToolBar';
import { FeatureCollection } from '@turf/turf';
import { getArea } from '../../utils/TurfUtils';
import geoJsonData from '../../assets/geoJsonData';

const MapWrapper= styled(MapContainer)`
	height: 720px;
	width: 100%;
`;

interface ILeafletMap {
	createNotification: (approval: boolean, area?: string) => void;
	closeNotification: (bool :boolean) => void
}

const LeafletMap: React.FC<ILeafletMap> = ({ createNotification, closeNotification }) => {
	
	function onReceiveData(data: FeatureCollection) {
		console.log("onReceiveData ", data)
		if (data !== null ) {
			createNotification(false, getArea(data))
		} else {
			createNotification(true)
		}
	}

	return (
		<MapWrapper
			center={[42.216, -83.355]}
			zoom={12}
			zoomControl={true}
			scrollWheelZoom={true}
			touchZoom={false}
			doubleClickZoom={false}
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