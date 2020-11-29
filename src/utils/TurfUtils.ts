import  { 
	lineIntersect, 
	lineString, 
	FeatureCollection
} from '@turf/turf';
import { FeatureGroup } from 'leaflet';

export function findIntersection(flightLayer: FeatureGroup, controlledZone: any, ): FeatureCollection {
	const layer: any = flightLayer.toGeoJSON();
	const flightCoordinates = layer.geometry.coordinates;
	const intersection = lineIntersect(lineString(controlledZone), lineString(flightCoordinates))

	return intersection;
}