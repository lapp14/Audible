





var song;

function start(){	
	draw.setCanvas(document.getElementById("songCanvas"));
	draw.setContext("2d");	
	//song		
	song = new Song();

	var timeSignature = new TimeSignature(4, 4);
	song.addItem(timeSignature);
	song.addItem(new Clef('treble'));

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

	song.addItem(new Note('c', 'eighth', 4));
	song.addItem(new Note('d', 'eighth', 4));
	song.addItem(new Note('e', 'eighth', 4));
	song.addItem(new Note('f', 'eighth', 4));
	song.addItem(new Note('g', 'eighth', 4));
	song.addItem(new Note('a', 'eighth', 4));
	song.addItem(new Note('b', 'eighth', 4));
	song.addItem(new Note('c', 'eighth', 5));
	song.addItem(new Note('d', 'eighth', 5));
	song.addItem(new Note('e', 'eighth', 5));
	song.addItem(new Note('f', 'eighth', 5));
	song.addItem(new Note('g', 'eighth', 5));
	song.addItem(new Note('a', 'eighth', 5));
	song.addItem(new Note('a', 'eighth', 5));


	resizeCanvas();
}

//this is rediculous
function canvasClickEvent(x, y) {

	for(var i = 0, len = song.getNumStaves(); i < len; i++) {
		if(y >= song.getStaff(i).getPosition().getY() && y <= song.getStaff(i).getPosition().getY() + dim.staffPadding + 5 * dim.staffSpacing) {
			for(var j = 0, items = song.getStaff(i)._items.length; j < items; j++) {

				var itemX = song.getStaff(i)._items[j].getPosition().getX();
				
				if(x >= itemX + 15 && x <= itemX + 60) {
					draw.drawNote('svg/note_half.svg' , itemX + 25,  25 +song.getStaff(i)._items[j].getPosition().getY());
					break;
				}
			}
		}
	}
}
	
function resizeCanvas(){

	if(dim.yOffset > dim.songPixelHeight){
		dim.songPixelHeight = dim.yOffset;
	}

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
