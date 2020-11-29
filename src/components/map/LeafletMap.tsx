import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet-draw';
import geoJsonData from '../../assets/geoJsonData';
import DrawToolBar from './DrawToolBar';

const MapWrapper= styled(MapContainer)`
	height: 720px;
	width: 100%;
`;

function LeafletMap() {

	return (
		<MapWrapper
			center={[42.216, -83.355]}
			zoom={12}
			zoomControl={false}
		>
			<TileLayer
				url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
			<GeoJSON
				data = {geoJsonData}/>
			<DrawToolBar />
		</MapWrapper>
	)
}

export default LeafletMap;