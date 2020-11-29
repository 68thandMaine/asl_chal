import React, { 
	createContext, 
	useState, 
	useRef, 
	useEffect, 
	useMemo, 
	MutableRefObject 
} from 'react';
import { Map } from 'leaflet';
import 'leaflet-draw';
import { 
		lineIntersect as t_lineIntersect,
		lineString as t_lineString,
	} from '@turf/turf';
import styled from 'styled-components';

interface ILeafletContext {
	map: Map
}

const LeafletContext = createContext<ILeafletContext | null>(null);

// Used to return the map object for leaflet
function useMapElement(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
	// Var for returning a map object from leaflet
	const [ map, setMap ] = useState<Map | null>(null); 
	
	// check if the useRef has a mutable dom node available
	if(mapRef && mapRef.current !== null) {
		const mapInstance = new Map(mapRef.current, { center: [42.216, -83.355], zoom: 12.5, zoomControl: false, scrollWheelZoom: false });
		setMap(mapInstance);
	}
	return map
}

function LeafletMap(props: any ) {
	const mapRef = useRef<HTMLDivElement>(null);
	const map = useMapElement(mapRef);

	// Context shares global data without having to explicitly pass props through component tree
	const context = useMemo( () => ( map ? {map} : null ), [map])
	
	const mapLayers = context ? (
		<LeafletContext.Provider value={context}>{props.children}</LeafletContext.Provider>
	) : null;

	return (
		<div ref={mapRef}>
			{mapLayers}
		</div>
	)
}

export default LeafletMap;