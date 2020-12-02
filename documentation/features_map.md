# Feature: Display a Map Over the Appropriate Coordinates

## Display a Map Centered Over the Detroit Metropolitan Airport

- Displaying the baselayer of a map requires two props: the `LatLng` coordinates of which to center the map, and an integer for the zoom.
- To determine the starting point of this map, I found the average of the lat long coordinates provided in the geoJSON data. This yielded an area near the Detroit Metropolitan Airport(DMA); however it was not 100% accurate, so ran a Google search for the lat/long coordinates of the DMA.
- To display the actual image of the map use a `TileLayer` and pass it the url for the OpenStreets map.
- Both the `MapContainer` and `TileLayer` components from `react-leaflet` use the same props as the leaflet elements would (map url, center coordinates, zoom, etc).

### [Back to README](../README.md#features)
