import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-draw';
import styled from 'styled-components';
import geojsonFeature from '../../assets/geoJsonData';

const Wrapper = styled.div`
	width: 100%;
	height: 720px;
`;

function LeafletMap() {
	useEffect(() => {

		// Map
		let map = L.map('map', {
			center: [42.216, -83.355],
			zoom: 12.5,
			zoomControl: false,
			scrollWheelZoom: false,
		});

		// Map drawing
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			detectRetina: true,
			maxZoom: 20,
		}).addTo(map);

		// Polygon
		L.geoJSON(geojsonFeature).addTo(map);

		// Draw Control

		const drawControl = new L.Control.Draw({position: "topleft"})
		map.addControl(drawControl);
		// const drawn_items = L.featureGroup().addTo(map);
		// const layer_group = L.featureGroup().addTo(map);


	});

	return (
		<Wrapper id="map" />
	)
}

export default LeafletMap;