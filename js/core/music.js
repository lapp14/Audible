
start();

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
			
	drawSong();

}

function drawSong(){
	drawHeader();
	drawStaff();
	drawStaff();
	drawStaff();

	drawStaff();
	drawTimeSignature('4', '4', 20, 128);
	drawTrebleCleff(60, 128);
	//draw.textMusicCenter('aSuhEihjweMN', 70, 60, 60);

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

function drawTimeSignature(upper, lower, x, y){
	draw.translate(x, y);
	draw.textBold(upper, 40, 30, 30);
	draw.textBold(lower, 40, 30, 56);

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