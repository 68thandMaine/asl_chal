import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Draw, Control, map, Layer } from 'leaflet';
import { createControlComponent, useLeafletContext } from '@react-leaflet/core';
import { useMap } from 'react-leaflet';
import 'leaflet-draw';
import { findIntersection } from '../../utils/TurfUtils';
import geoJSONData from '../../assets/geoJsonData';
import { featureCollection, GeometryCollection } from '@turf/turf';
import { FeatureCollection, GeoJsonProperties } from 'geojson';
const dmaCoords = geoJSONData.features[0].geometry.coordinates[0];




function getControlOptions(editableLayer : any): Control.DrawConstructorOptions {
	return (
		{
			position: 'topleft',
			draw: {
					polyline: {
							shapeOptions: {
									color: '#f357a1',
									weight: 2
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
}

function DrawToolbar({determineNotification}:IDrawToolbar) {
	const map = useMap();
	const context = useLeafletContext();
	const { layerContainer } = context;
	const DrawControl = createControlComponent(() => new Control.Draw(getControlOptions(layerContainer)));
	const controlRef = useRef<Layer | any>();
	
	const [drawn, setDrawn] = useState<boolean>(false);
	useEffect(() => {
		const container = context.layerContainer || context.map;
		map.on(Draw.Event.CREATED, (e) => {
			controlRef.current = e.layer;
			if (controlRef.current !== null) {
			container.addLayer(controlRef.current);
			setDrawn(true)
			}
		})
	}, [controlRef, map, context]);

	
	useEffect(() => {
		if(drawn) {
			const intersection = findIntersection(controlRef.current, dmaCoords)
			determineNotification(intersection)
		}
	}, [drawn]);
	
	
	
	return <DrawControl/>
}

export default DrawToolbar;