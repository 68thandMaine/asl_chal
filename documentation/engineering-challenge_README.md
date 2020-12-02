
## Description

Thanks to your [Part 107 Commercial Drone Pilot's license](https://www.faa.gov/uas/), you've been hired by a local electrical company to inspect several of their power lines using aerial drone videography. To understand if you are legally allowed to fly in this area, you've requested data from the FAA to indicate what airspace, if any, near your flight is [controlled](https://www.faa.gov/uas/recreational_fliers/where_can_i_fly/airspace_101/) and thus not eligible for drone flights. The FAA returned you an array of coordinates in [geoJson](https://geojson.org/) representing a single polygon of controlled airspace. Your job is to create a web application that will allow you to sketch various possible flights to visualize and quantify which portions of your flight will be in controlled airspace, so you can adjust as necessary.

## Requirements

The tools you will need are listed in the Tools section below. At its most basic, your app should load a map centered over the visible FAA polygon, which was generated using the provided data. You should have the ability to draw shapes of your flight area on the map, and be able to visualize which portion of this is in controlled airspace (i.e. any area that intersects the FAA polygon). Using this, display a message somewhere on the page indicating:
- Whether this flight will be approved or denied
- The area (in sq meters or sq kilometers) of the intersection, if an

At Airspace Link, we feel strongly about good communication. Make sure to provide a `README.md` which explains your approach, both from a functional and code perspective. Pay attention to grammar; good writing will always win us over. The README should provide setup instructions. You might include a list of ideas you'd love to tackle if you had infinite time to work on the app.

The FAA polygon data is included in this repo, which you can fork to get started. We understand that doing your best work can often take significant time, but please try to finish within one week. When it's ready, send us a link to the completed project. Please make your repo private and give access to `fieldsco`, `ddbradshaw`, and `jmburns` so we can review your work.

#### Extra credit ideas

- Deploy your project to [Github Pages](https://pages.github.com/)
- Provide a layer control to toggle the visibility of your flight area and the FAA polygon
- Allow the user to input a flight start time (hh:mm ampm). If there is a flight area sketch on the page, find the centroid, figure out the timezone of that point, then tack on a timezone to the start time. This scenario would come into play if the user were planning to fly in a different time zone than their current one.
- <insert your awesome idea here!>

## Tools

We use [ReactJS](https://reactjs.org/) at Airspace Link, and we strongly prefer this challenge to follow suit. We use [function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components), utilizing the [Hooks API](https://reactjs.org/docs/hooks-intro.html), but you are not required to use these if you prefer Class  components. [TypeScript](https://www.typescriptlang.org/) is a part of our world and we'd love to see that implemented as well. For the map and sketch tools, you can use [LeafletJS](https://leafletjs.com/) and [Leaflet Draw](http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html). For geoprocessing (intersect, area, etc.) [TurfJS](https://turfjs.org/) is your best bet.

## Evaluation

If there has to be a tradeoff, we'd rather see clean, well-organized code and attention to detail over a plethora of features. The point of this exercise is to give us insight into your style, creativity, and (I'll say it again) _attention to detail_. We're not a "code comments on every line" group of engineers, but they are welcome in sections you think might help a code reviewer better understand your logic.

You have the base requirements, but feel free to go above and beyond. This is your chance to truly show off your skills and creativity! Happy coding, and don't hesitate to reach out with any questions.
