import React, { useEffect } from 'react';
import L, { featureGroup } from 'leaflet';
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

		// geojson data
		L.geoJSON(geojsonFeature).addTo(map);

    var editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);
		// Draw Control
		
		let options : L.Control.DrawConstructorOptions  = {
			position: 'topleft',
			draw: {
					polyline: {
							shapeOptions: {
									color: '#f357a1',
									weight: 10
							}
					},
					polygon:
					 {
							allowIntersection: false, // Restricts shapes to simple polygons
							drawError: {
									color: '#e1e100', // Color the shape will turn when intersects
									message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
							},
							shapeOptions: {
									color: '#bada55'
							}
					},
					circle: false, // Turns off this drawing tool
					rectangle: false,
					marker: false,
					circlemarker: false,
			},
			edit: {
				featureGroup: editableLayers,
				remove: false,
			},
		}

		let drawnItems = new L.FeatureGroup();
		map.addLayer(drawnItems);

		let drawControl = new L.Control.Draw(options);
		map.addControl(drawControl);
		

		map.on(L.Draw.Event.CREATED, (e) => {
			if(e.type === "draw:created") {
				editableLayers.addLayer(e.layer)
			}
		})
	});

	return (
		<Wrapper id="map" />
	)
}

export default LeafletMap;