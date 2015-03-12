
var musicStaves = [];
var staffStandard;

function start(){	
	draw.setCanvas(document.getElementById("songCanvas"));
	draw.setContext("2d");	
        
        staffStandard = new StaffStandard()
        
	//song		
	//song = new Song();

	var timeSignature = new TimeSignature(4, 4);
	/*song.addItem(timeSignature);
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
*/

        dim.songPixelHeight = 5000;
	resizeCanvas();
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
	dim.canvasHeight = canvas.height;
	dim.canvasWidth = canvas.width;
	dim.canvasCenter = canvas.width / 2;
	
	
        staffStandard.renderBackground();    
        drawHeader();
        addStaffStandard();              
        
        
}

function scrollCanvasDiv(){
    $("#canvasDiv").scrollTop(dim.yOffset - $("#canvasDiv").height());
}

function addStaffStandard(){
    //each element has canvas, context, position(x, y)
    var foreground = staffStandard.getForeground();
    
    musicStaves[musicStaves.length] = { foreground: foreground,
                                        position: dim.yOffset };
    
    draw.getContext().drawImage(staffStandard.getBackground().canvas, 0, dim.yOffset);
    
        //drawing test line
        staffDrawing.horizontalLine(musicStaves[musicStaves.length - 1].foreground.context, 10, 10, 10 * musicStaves.length);
        
    draw.getContext().drawImage(musicStaves[musicStaves.length - 1].foreground.canvas, 0, dim.yOffset);    
    
    dim.yOffset += dim.staffHeight;
    scrollCanvasDiv();    
}

function removeStaffStandard(){
    if(musicStaves.length > 0){
        var staff = musicStaves.pop();    
        draw.getContext().clearRect(0, staff.position, staff.foreground.canvas.width, staff.foreground.canvas.height);
        dim.yOffset -= dim.staffHeight;
        scrollCanvasDiv();    
    }
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
