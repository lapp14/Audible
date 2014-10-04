function start(){	
	draw.setCanvas(document.getElementById("songCanvas"));
	draw.setContext("2d");
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
			

	//song		
	var song = new Song();

	for(var i = 0; i < 30; i++) {
		var n = new Note('c', 'half', 4);
		song.addItem(n);
	}

	song.drawSong();

}

function drawSong(){
	drawHeader();
	drawStaff();
	drawStaff();
	draw.drawTimeSignature('4', '4', 20, 128);
	drawTrebleCleff(60, 128);

	draw.noteHalf(55, 100, 100);
	draw.noteHalfInv(55, 140, 100);

	draw.noteQuarter(55, 180, 100);
	draw.noteQuarterInv(55, 240, 100);

	//* valid whole notes */
	draw.noteWhole(55, 290, 135);
	draw.noteWhole(55, 290, 147);
	draw.noteWhole(55, 290, 159);
	draw.noteWhole(55, 290, 171);

	draw.noteWhole(55, 380, 129);
	draw.noteWhole(55, 380, 141);
	draw.noteWhole(55, 380, 153);
	draw.noteWhole(55, 380, 165);
	draw.noteWhole(55, 380, 177);

	/***quarter notes **/
	draw.noteQuarterInv(55, 460, 100);
	draw.noteQuarterInv(55, 460, 112);
	draw.noteQuarter(55, 480, 124);
	draw.noteQuarter(55, 480, 136);


	draw.noteQuarterInv(55, 520, 94);
	draw.noteQuarterInv(55, 520, 106);
	draw.noteQuarter(55, 560, 118);
	draw.noteQuarter(55, 560, 130);
	draw.noteQuarter(55, 560, 142);

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


function drawStaff(){

	var x1 = dim.getSideMargin();
	var y1 = dim.getTopMargin() + dim.yOffset;

	var x2 = draw.getCanvas().width - dim.getSideMargin();
	var y2 = dim.getTopMargin() + dim.yOffset;

	draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
	dim.yOffset += dim.staffSpacing;
	draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
	dim.yOffset += dim.staffSpacing;
	draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
	dim.yOffset += dim.staffSpacing;
	draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
	dim.yOffset += dim.staffSpacing;
	draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);

	draw.line(x1, y1, x1, y2 + 4 * dim.staffSpacing);
	draw.line(x2, y1, x2, y2 + 4 * dim.staffSpacing);

	dim.yOffset += 8 * dim.staffSpacing;

	if(settings.displayTab){
		x1 = dim.getSideMargin();
		y1 = dim.getTopMargin() + dim.yOffset;

		x2 = draw.getCanvas().width - dim.getSideMargin();
		y2 = dim.getTopMargin() + dim.yOffset;

		draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, draw.getCanvas().width - x1, dim.getTopMargin() + dim.yOffset);

		draw.line(x1, y1, x1, y2 + 5 * dim.staffSpacing);
		draw.line(x2, y1, x2, y2 + 5 * dim.staffSpacing);
		dim.yOffset += 8 * dim.staffSpacing;

	}
}