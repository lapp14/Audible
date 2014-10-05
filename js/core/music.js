var song;


function start(){	
	draw.setCanvas(document.getElementById("songCanvas"));
	draw.setContext("2d");		

	//song		
	song = new Song();

	var timeSignature = new TimeSignature(4, 4);
	song.addItem(timeSignature);

	for(var i = 0; i < 40; i++) {
		var n = new Note('c', 'whole', 4);
		song.addItem(n);
	}

	song.drawSong();
	resizeCanvas();
}
	
function resizeCanvas(){

	if(dim.yOffset > dim.songPixelHeight)
		dim.songPixelHeight = dim.yOffset;

	dim.yOffset = 0;

	var canvas = draw.getCanvas();

	if(dim.songPixelHeight > $("#canvasDiv").height()) {
		draw.setCanvasHeight(dim.songPixelHeight);
	} else {
		draw.setCanvasHeight($("#canvasDiv").height());
	}
	
	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;

	//set dimensions
	dim.canvasHeight = canvas.height
	dim.canvasWidth = canvas.width
	dim.canvasCenter = canvas.width / 2;
	
	song.drawSong();
}

function drawHeader(){
	dim.yOffset += 40;
	draw.textCenter('Song Title', 30, dim.canvasCenter, dim.yOffset);
	dim.yOffset += 28
	draw.textCenter('Artist', 18, dim.canvasCenter, dim.yOffset);
	dim.yOffset += 28
	draw.textCenter('Album', 18, dim.canvasCenter, dim.yOffset);
	dim.yOffset += 18;
}

function drawTrebleCleff(x, y){

}
