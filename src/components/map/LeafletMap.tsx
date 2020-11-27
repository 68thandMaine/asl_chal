import React, { useRef } from 'react';
import styled from 'styled-components';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

import { GeoJsonObject } from 'geojson';
import { LatLngTuple } from 'leaflet';

const StyledMapContainer = styled(MapContainer)`
	height: 90vh
`
interface LeafletMapProps {
	geoJsonData : GeoJsonObject,
	mapStartCoordinates: LatLngTuple
}

const LeafletMap = (props: LeafletMapProps) => {
	const ref = useRef<HTMLDivElement>(null);
	return (
		<StyledMapContainer
			center={props.mapStartCoordinates}
			zoom={13}
			scrollWheelZoom={false}
			
		>
		<TileLayer
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
		/>
	  <GeoJSON
			data={props.geoJsonData}
			/>
		</StyledMapContainer>
	)
};

export default LeafletMap;