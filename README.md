# Airspace Link Code Challenge

> [To view the instructions for this challenge click here.](./documentation/engineering-challenge_README.md#Description)

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
| V. | [References](#references) |
| VI. | [Limitations](#limitations) |

___

## Installation and Viewing

> ### [This project is hosted on github pages and can viewed by clicking here.](https://68thandMaine.github.io/asl_chal)

To run this project in a local environment run:

- `$ git clone https://github.com/68thandMaine/asl_chal.git && cd asl_chal && npm i && npm run start`

These commands download the repository to the current directory, move focus to the cloned `asl_chal` directory, install the necessary dependencies, and start the project.

___

## Tech Design

> ### [To view prior approaches click here](./src/assets/archived_approaches)

The solution to this code challenge will uitilize [LeafletJS](https://leafletjs.com/), [Leaflet Draw](http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html), and [TurfJS](https://turfjs.org/). These tools are framework agnostic, and most examples online are written with vanilla JavaScript in a single file. Integrating the tools into a React project is an achievable task, but requires special tooling to preserve, access, and edit the map state across components. In order to meet the MVP of this code challenge within the given time frame, the [React Leaflet](https://react-leaflet.js.org/) library has been included.

React Leaflet offers a component interface for most Leaflet elements and supports Typescript development. Including it in this project will allow developers to build customizable React components as it exposes the Leaflet map and it's associated data to components with inbuilt provider / consumer components.

For styling this project will use [styled-components](https://styled-components.com/), [tailwind css](https://tailwindcss.com/), and CSS. Global and custom styles are held in `App.css`, individual components are styled with styled components, and tailwind's utility classes are used to provide the layout.

### Component Architecture

The architecture for this project is quite simple:

#### - `App.tsx`

- Stateful component that uses the `useState` hook to hold a map for state values used in the application. It returns a single component that renders the layout of the application.

#### - `Dashboard.tsx`

- Component used for rendering the layout. It accepts components as props and renders them in different "panes".

#### - `LeafletMap.tsx`

- This component is responsible for returning the Leaflet map. While the architecture is my own, the majority of this component is provided by [React Leaflet](https://react-leaflet.js.org/).
- Component is built to receive prop updates that could change the location of the map and FAA geoJSON data.

#### - `DrawToolBar.tsx`

- This component uses [Leaflet Draw](http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html) and [React Leaflet](https://react-leaflet.js.org/) to build the draw toolbar for the map.
- [React Leaflet](https://react-leaflet.js.org/) creates interfaces to Leaflet elements and connects them with custom contexts. It provides this component with methods that expose the Leaflet map instance and can create different Leaflet elements - in this case the Draw toolbar.
- Map events for sketching flight paths and removing map layers are 'listened to' in the `useEffect` hook.

#### - `Menu.tsx`

- Component that displays the approval message.
- Has a lot of filler data. The inputs and button are there for visual purposes and have no functionality as of 12.01.2020.

The rest of the components in this project are for presentation purposes and are not directly related to the core functionality of the MVP.

___

## Features

As per the [requirements of the code challenge](./documentation/engineering-challenge_README.md) the MVP of this application should:

- [Display a map centered over the appropriate coordinates.](./documentation/features_map.md#display-a-map-centered-over-the-detroit-metropolitan-airport)
- [Display the provided GeoJSON data.](./documentation/features_geojson.md#display-the-provided-geojson-data-as-a-polygon)
- [Draw shapes of the flight on the map.](./documentation/features_leafletdraw.md#draw-shapes-of-the-flight-on-the-map)
- [Display a message if the flight will be approved or not.](./documentation/features_approvalMessage#display-flight-approval-message)
- [Display the area of the intersection.](#display-the-area-of-the-intersection-(if-any))

Click on any of the links above to view the tech design behind each feature.

___

## Limitations

- Incorrect usage of Typescript: Several variables are declared with an `any` type to skirt around compiler issues.
- Really complicated flight paths will break the application by throwing the following error: `TopologyException: found non-noded intersection between [coordinates from path] and [coordinates from path]`.
- CSS bloat
- The relationship between `App.tsx` and `Dashboard.tsx` is unnecessary for an application of this size. App does pass props to components nested in the Dashboard, but these components are declared in the `App.tsx` file already. A good refactor would be to move the state for the map and menu into `Dashboard.tsx` and initialize the map and menu components there. A reason to keep this design would be if routes were added to the project as `App.tsx` would likely hold the router component rather than the display components.

___

## Next Steps

- Add ability to move the map starting location with an address search or by Lat/Long coordinates.
	- Integrate [Google autocomplete for addresses](https://developers.google.com/maps/documentation/javascript/places-autocomplete) to request address data. This data can be used to generate Lat/Long coordinates to move the starting location of the map.
- Build an API that returns the Lat/Long coordinates of a location when a user provides an address or Lat/Long coordinates.
- Integrate Redux or a custom context for holding state.
- Make responsive
	- When on mobile turn the dashboard layout into rows rather than columns.
- [`...CodeChallengeExtraCredit`](./engineering-challenge/README.md#extra-credit-ideas)

___

## References

- Alex3165. (n.d.). Alex3165/react-leaflet-draw. Retrieved November 29, 2020, from https://github.com/alex3165/react-leaflet-draw
- PaulLeCam. (n.d.). PaulLeCam/react-leaflet. Retrieved November 29, 2020, from https://github.com/PaulLeCam/react-leaflet