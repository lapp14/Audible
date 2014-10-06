var song;

function start(){	
	draw.setCanvas(document.getElementById("songCanvas"));
	draw.setContext("2d");		

	//song		
	song = new Song();

	var timeSignature = new TimeSignature(4, 4);
	song.addItem(timeSignature);

	song.addItem(new Note('c', 'half', 4));
	song.addItem(new Note('d', 'half', 4));
	song.addItem(new Note('e', 'half', 4));
	song.addItem(new Note('f', 'quarter', 4));
	song.addItem(new Note('g', 'half', 4));
	song.addItem(new Note('a', 'quarter', 4));
	song.addItem(new Note('b', 'half', 4));
	song.addItem(new Note('c', 'quarter', 5));
	song.addItem(new Note('d', 'quarter', 5));
	song.addItem(new Note('e', 'quarter', 5));
	song.addItem(new Note('f', 'quarter', 5));
	song.addItem(new Note('g', 'quarter', 5));
	song.addItem(new Note('a', 'quarter', 5));

	song.addItem(new Note('c', 'whole', 4));
	song.addItem(new Note('d', 'whole', 4));
	song.addItem(new Note('e', 'whole', 4));
	song.addItem(new Note('f', 'whole', 4));
	song.addItem(new Note('g', 'whole', 4));
	song.addItem(new Note('a', 'whole', 4));
	song.addItem(new Note('b', 'whole', 4));
	song.addItem(new Note('c', 'whole', 5));
	song.addItem(new Note('d', 'whole', 5));
	song.addItem(new Note('e', 'whole', 5));
	song.addItem(new Note('f', 'whole', 5));
	song.addItem(new Note('g', 'whole', 5));
	song.addItem(new Note('a', 'whole', 5));


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
