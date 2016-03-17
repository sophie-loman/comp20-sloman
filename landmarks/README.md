***COMP 20 Lab 6: Messages***
By: Sophie Loman
Date: 3/16/16

I rendered a Google Map using the Google Maps API, found my location using Geolocation, sent that information to the given database at herokuapp.com, and parsed the response data in order to place my classmates, relevant landmarks, and related information on the map. Info windows appear when each icon is clicked, giving the distance from me in the case of the classmate icons (Dori fish), information about the landmark in the case of the landmark icons (boats), and the distance between me and the nearest landmark in the case of my icon (Nemo fish). A polyline is also rendered, connecting Nemo to the nearest boat. The polyline is slightly off the markers, but the location of the endpoints seems to improve when zoomed in slightly. 

I used the implementation of the Haversine Formula on Stack Overflow to calculate the distance between locations on the map (http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript) and referenced the example code at https://github.com/tuftsdev/WebProgramming/tree/gh-pages/examples/google_maps. I also worked with Olivia MacDougal on retreiving and parsing the location data, and discussed info windows with Derick Yang. 

I worked on this assignment for about 9 hours.