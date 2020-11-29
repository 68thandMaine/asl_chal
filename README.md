# Airspace Link Code Challenge

The purpose of this application is to provide a drone operator the ability to create flight plans around restricted airspace.

[For the original challenge description click me](./engineering-challenge/README.md#$Description)

| Section | Name |
| --- | --- |
| I. | [Installation](#installation) |
| II. | [Features](#features) |
| III. | [Tech Design](#tech-design) |
| IV. | [Limitations](#limitations) |
| V. | [References](#references) |

## Installation

This project is not hosted live, but can be run in a local environment by copying and pasting the following command into a terminal:

- `$ git clone https://github.com/68thandMaine/asl_chal.git && cd asl_chal && npm i && npm run start`

Issuing this command will download the repository to the current directory, move focus to the `asl_chal` directory, install the necessary dependencies, and start the project.

___

## Features

As per the [requirements of the code challenge](./engineering-challenge/README.md) the MVP of this application should:

- [Display a map centered over the appropriate coordinates](#display-a-map-centered-over-the-detroit-metropolitan-airport)
- [Display the provided GeoJSON data.](#display-the-provided-geojson-data)
- [Draw shapes of the flight on the map.](#draw-shapes-of-the-flight-on-the-map)
- [Visualize which areas of the flight plan intersect the FAA polygon](#visualize-flight-polygon-intersections)
- [Display a message if the flight will be approved or not](#display-flight-approval-message).
- [Display the area of the intersection](#display-the-area-of-the-intersection-(if-any)).

___

## Tech Design

The solution to this code challenge utilizes [LeafletJS](https://leafletjs.com/), [Leaflet Draw](http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html), and [TurfJS](https://turfjs.org/). These are framework agnostic, so integrating them into a React application requires tooling and customization. Most examples online are written with vanilla JavaScript, and are not entirely suitable for SPA web development.

Initally this project used a single file to interact with Leaflet and Turf. The map, drawing capability, and intersection calculations were all written witin a `useEffect` hook following the vanilla JS examples online. After demonstrating a proof of concept, it was time to refactor into modular React components. To view the single file code visit [`/src/assets/archived_approaches/`](./src/assets/archieved_approachess).

Most examples found online mention integrating a third party tool called [React Leaflet](https://react-leaflet.js.org/) into React projects, as it offers a component interface for most Leaflet elements. This project includes React Leaflet to create modular components. The sections below detail the approach taken to build each feature:

### - Display a Map Centered Over the Detroit Metropolitan Airport

- Displaying the baselayer of a map requires two props: the `LatLng` coordinates of which to center the map, and an integer for the zoom.
- To determine the starting point of this map, I found the average of the lat long coordinates provided in the geoJSON data. This yielded an area near the Detroit Metropolitan Airport(DMA); however it was not 100% accurate, so ran a Google search for the lat/long coordinates of the DMA.
- To display the actual image of the map use a `TileLayer` and pass it the url for the OpenStreets map.
- Both the `MapContainer` and `TileLayer` compnents from `react-leaflet` use the same props as the leaflet elements would (map url, center coordinates, zoom, etc).

### - Display the Provided GeoJSON Data as a Polygon

- Move the FAA geoJSON data into `src/assets` and give it a Type.
- Import this file in `src/components/map/LeafletMap.tsx` to pass it to the geoJSON layer.
- Declare a `<GeoJSON/>` compomnent from `react-leaflet`. This component consumes geoJSON coordinates and prints them to the DOM.

### - Draw Shapes of the Flight on the Map

To create the toolbar, I reverse engineered the solution that [Rieux](#references) provided with react leaflet draw to suit my needs.  

### - Display a Flight Approval Message

### - Display the Area of the Intersection (if any)

___

## Limitations

___

## References

- Alex3165. (n.d.). Alex3165/react-leaflet-draw. Retrieved November 29, 2020, from https://github.com/alex3165/react-leaflet-draw
- An open-source JavaScript library for interactive maps. (n.d.). Retrieved November 29, 2020, from https://leafletjs.com/
- PaulLeCam. (n.d.). PaulLeCam/react-leaflet. Retrieved November 29, 2020, from https://github.com/PaulLeCam/react-leaflet
TURF. (n.d.). Retrieved November 29, 2020, from https://turfjs.org/
