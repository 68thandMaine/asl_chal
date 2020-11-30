import  { 
	intersect, 
	polygon, 
	Feature,
	area
} from '@turf/turf';
import { FeatureGroup } from 'leaflet';

export function findIntersection(flightLayer: FeatureGroup, controlledZone: any, ): Feature | null {
	const layer: any = flightLayer.toGeoJSON();
	const flightCoordinates = layer.geometry.coordinates;
	const intersection = intersect(polygon(controlledZone), polygon
	(flightCoordinates))

	return intersection;
}

