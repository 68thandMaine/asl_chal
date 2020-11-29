import React, { useState, useEffect } from 'react';
import L, { point } from 'leaflet';
import 'leaflet-draw';
import  { lineIntersect, lineString, polygon } from '@turf/turf';
import styled from 'styled-components';

import geoJsonData from '../../assets/geoJsonData';
const dmaCoords = geoJsonData.features[0].geometry.coordinates[0];

const Wrapper = styled.div`
	width: 100%;
	height: 720px;
`;


function LeafletMap() {
	const [ intersect, setIntersect ] = useState<boolean>(false);


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
		L.geoJSON(geoJsonData).addTo(map);

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
							},
							showLength: false,
							metric: false,
							feet: false,
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

		let droneFlightLayer = new L.FeatureGroup();
		map.addLayer(droneFlightLayer);

		let drawControl = new L.Control.Draw(options);
		map.addControl(drawControl);

		
		map.on(L.Draw.Event.CREATED, (e : any) => {
			
			editableLayers.addLayer(e.layer)
			let leafletLayer: any = editableLayers.toGeoJSON();
			let pointCoords = leafletLayer.features[0].geometry.coordinates;
			let intersection = lineIntersect(lineString(dmaCoords), lineString(pointCoords));
			
			if(intersection.features && intersection.features.length !== 0) {
				// setIntersect(true)
			}
		});
		
		console.log(intersect)
	});

	return (
		<Wrapper id="map" />
	)
}

export default LeafletMap;