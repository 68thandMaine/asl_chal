import  { 
	intersect, 
	polygon, 
	Feature,
	area,
	GeometryCollection,
	FeatureCollection,
} from '@turf/turf';
import { convertArea } from '@turf/helpers';
import { FeatureGroup } from 'leaflet';

export function findIntersection(flightLayer: FeatureGroup, controlledZone: any, ): Feature | null {
	const layer: any = flightLayer.toGeoJSON();
	const flightCoordinates = layer.geometry.coordinates;
	const intersection = intersect(polygon(controlledZone), polygon
	(flightCoordinates))

	return intersection;
}

export function getArea(data: any): string {
	const { geometry } = data;
	const coordinates = geometry.coordinates;
	const areaOfIntersect = area(polygon(coordinates));
	const convertedArea = convertArea(areaOfIntersect, 'meters', 'kilometers')
	return convertedArea.toFixed(2)
}

