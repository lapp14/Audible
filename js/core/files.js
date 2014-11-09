function loadOrdered(files, callback) {
	$.getScript(files.shift(), function() {
		if(files.length) {
			loadOrdered(files, callback);
		} else {
			callback();
		}
	});
}

var files = [
	"js/core/settings.js",
	"js/core/dim.js",
	

	"js/core/obj/Point.js",
	"js/core/obj/Items.js",
	"js/core/obj/Staff.js",
	"js/core/obj/objects.js",

	"js/core/canvasDrawing.js"

];