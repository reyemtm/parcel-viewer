L.Control.EasyPrint = L.Control.extend({
	options: {
		title: 'Print Map Image',
		position: 'topleft'
	},

	onAdd: function () {
		var container = L.DomUtil.create('div', 'leaflet-control-easyPrint leaflet-bar leaflet-control');

		this.link = L.DomUtil.create('a', 'leaflet-control-easyPrint-button leaflet-bar-part', container);
		this.link.id = "leafletEasyPrint";
		this.link.title = this.options.title;

		L.DomEvent.addListener(this.link, 'click', printPage, this.options);

		return container;
	}

});

L.easyPrint = function(options) {
	return new L.Control.EasyPrint(options);
};

function printPage(){
  alert('Only the map will be exported. Print is in beta. Results may vary.');
	if (this.elementsToHide){
		var htmlElementsToHide = document.querySelectorAll(this.elementsToHide);

		for (var i = 0; i < htmlElementsToHide.length; i++) {
			htmlElementsToHide[i].className = htmlElementsToHide[i].className + ' _epHidden';
		}
	}
	window.print();

	if (this.elementsToHide){
		var htmlElementsToHide = document.querySelectorAll(this.elementsToHide);

		for (var i = 0; i < htmlElementsToHide.length; i++) {
			htmlElementsToHide[i].className = htmlElementsToHide[i].className.replace(' _epHidden','');
		}
	}


}
