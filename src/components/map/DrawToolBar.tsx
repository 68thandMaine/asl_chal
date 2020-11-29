import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

// interface DrawToolBar {
// 	drawCreate: 
// }

function DrawToolBar(props:any) {
	const map = useMap();

	useEffect(()=> {
		let leafletDrawControl : L.Control.DrawConstructorOptions = {
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
		}
		let control = new L.Control.Draw(leafletDrawControl);
		map.addControl(control);

		map.on(L.Draw.Event.CREATED, (e) => {
			props.drawCreate(e);
		})
	})
	return (
		<></>
	);
}

export default DrawToolBar;