import { LatLng } from "leaflet";

export interface INotification {
	showNotification: boolean
	message: string
}

export interface IStateMap {
	map: {
		startingCoordinates: LatLng
		controlledAirspace: GeoJSON.FeatureCollection
		mapUrl: string
	}
	notification: INotification
}