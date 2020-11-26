import React from 'react';
import LeafletMap from '../components/map/LeafletMap';
import { LatLngTuple } from 'leaflet';
import data from '../assets/geoJsonData'

const dmtCoords: LatLngTuple = [42.2161722, -83.3553842];

function DashboardContainer () {
	return (
		<section>
			<LeafletMap
				geoJsonData={data}
				mapStartCoordinates={dmtCoords} />
		</section>
	)
}

export default DashboardContainer;