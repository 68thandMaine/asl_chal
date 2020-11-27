# Airspace Link Code Challenge

[For the original challenge description click me](./engineering-challenge/README.md#$Description)

The purpose of this application is to provide a drone operator the ability to create flight plans around restricted airspace. As per the [requirements of the code challenge](./engineering-challenge/README.md) the MVP of this application should:

- [Display a map centered over the appropriate coordinates](#display-a-map-centered-over-the-detroit-metropolitan-airport)
- [Display the provided GeoJSON data.](#display-the-provided-geojson-data)
- [Draw shapes of the flight on the map.](#draw-shapes-of-the-flight-on-the-map)
- Visualize which areas of your flight plkan intersect the FAA polygon
- Display a message if your flight will be approved or not.
- Display the area of the intersection.

___

## Tech Design

### Display a map centered over the Detroit Metropolitan Airport

Using the provided GeoJson data, I determined the Latitude and Longitude coordinates necessary to draw the polygon. Each coordinate within `features[0].geometry.coordinates` array that was used to create a polygon could be averaged to discover an initial starting coordinate.

Displaying the map posed a bit of a learning curve, so I opted to use the [`react-leaflet` library](https://react-leaflet.js.org/) to supplement this project. This library does not replace leaflet, it acts as an interface for common Leaflet elements; and it has types for Typescript.

To create the map I will use the `MapContainer` and `TilerLayer` components from the `react-leaflet` library. They will be combined into a single presentational component called `LeafletMap.tsx`. Data for the center coordinates, zoom, and any other useful information for the map will be held in `App.tsx` and passed in as props.

#### Created:

- `LeafLetMap` 
	- LeafletMap.tsx

### Display the Provided GeoJson Data

To display the GeoJson data provided in the challenge I will store it as an exported constant in the assets directory, import it to `App.tsx`, and pass it into the `LeafletMap` component.

Within the `LeafletMap`component I will render a `<GeoJSON>` component that I export from `react-leaflet`. This component takes the GeoJSON data and returns an instance of the LeafLetGeoJSON class.

#### Created
- `<GeoJSON>` import and use in `LeafletMap.tsx`.

### Draw Shapes of the Flight on the Map

To draw shapes of the flight on the map I will need to create my own components. I cannot rely on the abstractions provided through `recat-leaflet`.