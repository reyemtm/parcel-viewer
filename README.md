##Open Parcel Viewer

This open data parcel viewer is a client-side app that uses Leaflet to render a whole county parcel map without the need for a GIS server. 

##Features
 - Search by any field or multiple fields, such as Name or Parcel ID
 - Sidebar, fullscreen, location, printing (using browser print dialog)
 - The app can handle up to approx 50k parcel features

##Requirements
 - Data in topojson format
 - A string field in the data titled 'index' to house the searchable attributes with a separator - see the example
 - Jekyll or download the zip file and build the index page manually
 - A free Mapbox API key for using the Mapbox imagery (not needed, the esri imagery could be used instead)
 - A (free) web server such as GitHub, surge.sh, others...

##Upgrades - Please Contribute
 - Create a Node build of the app
 - Convert from L.Canvas to L.GridLayer to be compatible with Leaflet 1.0
 - Make an option for using vector tiles styled in Mapbox
 - Create a function to automatically split the index field and push all the index 'fields' to the popup or the sidebar
 - Add more/other tools to the toolbar
 - Convert the toolbar from using leaflet-top leaflet-left to creating a new customized leaflet control

##Issues
 - Past zoom level 18 the parcels disappear - this is an upstream issue with geojson-vt
 - Pinch and zoom on touch devices causes strange behavior so it is disabled, use the zoom buttons (behind the sidebar) instead
 - Zoom animations have been limited to 2 zoom levels

This app is powered by Jekyll.
