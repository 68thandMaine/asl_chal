# Airspace Link Code Challenge

> [To view the instructions for this challenge click here.](./engineering-challenge/README.md#$Description)

The purpose of this application is to provide a drone operator the capability to map potential flight paths in regards to controlled airspace (areas ineligible for drone operations). The FAA GeoJSON da
ta contains coordinates for the controlled airspace near a given location. This application will determine if the path a user creates breaches this area; and if it does, what the total area of the overlap is.

___

## Table of Contents

|  | Section Name |
| --- | --- |
| I. | [Installation and Viewing](#installation-and-viewing) |
| II. | [Tech Design](#tech-design) |
| III. | [Features](#features) |
| IV. | [Next Steps](#limitations) |
| V. | [Limitations](#limitations) |
| VI. | [References](#references) |

___

## Installation and Viewing

> ### [This project is hosted on github pages and can viewed by clicking here.](https://68thandMaine.github.io/asl_chal)

To run this project in a local environment run: 

- `$ git clone https://github.com/68thandMaine/asl_chal.git && cd asl_chal && npm i && npm run start`

These commands download the repository to the current directory, move focus to the cloned `asl_chal` directory, install the necessary dependencies, and start the project.

___

## Tech Design

The solution to this code challenge utilizes [LeafletJS](https://leafletjs.com/), [Leaflet Draw](http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html), and [TurfJS](https://turfjs.org/). These are framework agnostic, so integrating them into a React application requires tooling and customization. Most examples online are written with vanilla JavaScript, and are not entirely suitable for SPA web development.

Initally this project used a single file to interact with Leaflet and Turf. The map, drawing capability, and intersection calculations were all written witin a `useEffect` hook following the vanilla JS examples online. After demonstrating a proof of concept, it was time to refactor into modular React components. To view the single file code visit [`/src/assets/archived_approaches/`](./src/assets/archieved_approachess).

Most examples found online mention integrating a third party tool called [React Leaflet](https://react-leaflet.js.org/) into React projects, as it offers a component interface for most Leaflet elements. This project includes React Leaflet to create modular components. The sections below detail the approach  taken to build each feature:

___

## Features

As per the [requirements of the code challenge](./engineering-challenge/README.md) the MVP of this application should:

- [Display a map centered over the appropriate coordinates](./documentation/features_map.md#display-a-map-centered-over-the-detroit-metropolitan-airport)
- [Display the provided GeoJSON data.](./documentation/features_geojson.md#display-the-provided-geojson-data-as-a-polygon)
- [Draw shapes of the flight on the map.](./documentation/features_leafletdraw.md#draw-shapes-of-the-flight-on-the-map)
- [Display a message if the flight will be approved or not](./documentation/features_approvalMessage#display-flight-approval-message)
- [Display the area of the intersection](#display-the-area-of-the-intersection-(if-any))

Click on any of the links above to view the tech design behind each feature.

___

## Next Steps

___

## Limitations

___

## References

- Alex3165. (n.d.). Alex3165/react-leaflet-draw. Retrieved November 29, 2020, from https://github.com/alex3165/react-leaflet-draw
- An open-source JavaScript library for interactive maps. (n.d.). Retrieved November 29, 2020, from https://leafletjs.com/
- PaulLeCam. (n.d.). PaulLeCam/react-leaflet. Retrieved November 29, 2020, from https://github.com/PaulLeCam/react-leaflet
TURF. (n.d.). Retrieved November 29, 2020, from https://turfjs.org/
