import React, { useEffect, useRef } from 'react';
import { Draw, Control, Layer } from 'leaflet';
import { createControlComponent, useLeafletContext } from '@react-leaflet/core';
import { useMap } from 'react-leaflet';
import 'leaflet-draw';
import { findIntersection } from '../../utils/TurfUtils';
import { GeoJsonProperties } from 'geojson';
import geoJSONData from '../../common/geoJsonData';
const dmaCoords = geoJSONData.features[0].geometry.coordinates;

function getControlOptions(editableLayer : any): Control.DrawConstructorOptions {
	return (
		{
			position: 'topleft',
			draw: {
					polyline:false,
					polygon:
					 {
							allowIntersection: false,
							drawError: {
									color: '#F2AB6D',
									message: '<strong>Oh snap!<strong> you can\'t draw that!'
							},
							shapeOptions: {
									color: '#F2AB6D',
									fillOpacity: 0.7
							}
					},
					circle: false,
					rectangle: false,
					marker: false,
					circlemarker: false,
			},
			edit: {
				featureGroup: editableLayer,
				remove: false,
			}
		}
	)
}

interface IDrawToolbar {
	determineNotification(intersection: GeoJsonProperties): any ;
	closeNotification: () => void;
}

function DrawToolbar({determineNotification, closeNotification}:IDrawToolbar) {
	const context = useLeafletContext();
	const container = context.layerContainer || context.map;
	const DrawControl = createControlComponent(() => new Control.Draw(getControlOptions(container)));
	const map = useMap();
	const controlRef = useRef<Layer | any>();
	
	useEffect(() => {	
		map.on(Draw.Event.CREATED, (e) => {
			controlRef.current = e.layer;
			if (controlRef.current !== null) {
				container.addLayer(controlRef.current);
				let intersection = findIntersection(controlRef.current, dmaCoords)
				determineNotification(intersection)
			}
		})

		map.on(Draw.Event.TOOLBAROPENED, (e) => {
			container.removeLayer(controlRef.current);
		});

	}, [controlRef, map, container, determineNotification, closeNotification]);

	
	return <DrawControl/>
}

export default DrawToolbar;
