##Open Parcel Viewer

This open data parcel viewer is a client-side app that uses Leaflet to render a whole county parcel map without the need for a GIS server. 

##Features
 - Search by any field or multiple fields, such as Name or Parcel ID
 - Sidebar, fullscreen, location, printing (using browser print dialog), 
 - The app can handle up to approx 50k parcel features

##Requirements
 - Data in topojson format
 - A string field in the data titled 'index' to house the searchable attributes with a separator - see the example
 - Jekyll or download the zip file and build the index page manually
 - A (free) web server such as GitHub, surge.sh, others...

##Issues
 - Past zoom level 18 the parcels disappear - this is an upstream issue with geojson-vt
 - Pinch and zoom on touch devices causes strange behavior so it is disabled, use the zoom buttons (behind the sidebar) instead
 - Zoom animations have been limited to 2 zoom levels

This app is powered by Jekyll.
