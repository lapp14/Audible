
var musicStaves = [];

function start(){	
	draw.setCanvas(document.getElementById("songCanvas"));
	draw.setContext("2d");	
        
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
    resizeCanvas();
    addStaffStandard();
    addStaffStandard();
    addStaffStandard();
}
	
//switch to call draw.resizeCanvas() after testing
function resizeCanvas(){
    draw.resizeCanvas();

    StaffStandard.renderBackground(); 
    drawSong();
}

function scrollCanvasDiv(){
    $("#canvasDiv").animate(
        { scrollTop: dim.yOffset - $("#canvasDiv").height() },
        'slow'
    );
}

function drawSong() {  
    console.log('drawsong: yOffset ' + dim.yOffset);
    //draw staves
    for(var i = 0; i < musicStaves.length; i++){
        draw.getContext().drawImage(StaffStandard.getBackground().canvas, 0, musicStaves[i].position);
    
        //drawing test lines
        staffDrawing.horizontalLine(musicStaves[i].foreground.context, 10, 0, 10 + 10 * i);
        staffDrawing.horizontalLine(musicStaves[i].foreground.context, 10, musicStaves[i].foreground.canvas.height, 10 + 10 * i);
        
        draw.getContext().drawImage(musicStaves[i].foreground.canvas, 0, musicStaves[i].position); 
    }
}

function addStaffStandard(){
    //each element has canvas, context, position(x, y)
    var foreground = StaffStandard.getForeground();
    
    musicStaves[musicStaves.length] = { foreground: foreground,
                                        position: dim.yOffset };
    
    
    dim.yOffset += dim.staffHeight;
    draw.setCanvasHeight();
    drawSong();
    scrollCanvasDiv();    
}

function removeStaffStandard(){
    if(musicStaves.length > 0){
        var staff = musicStaves.pop();    
        draw.getContext().clearRect(0, staff.position, staff.foreground.canvas.width, staff.foreground.canvas.height);
        dim.yOffset -= dim.staffHeight;
                
        scrollCanvasDiv(); 
        draw.setCanvasHeight();
        drawSong();   
    }
}

/**
 * CHANGE THIS TO PRE RENDER ON A CANVAS NOT DRAW TEXT DIRECTLY
 * @returns {undefined}
 */
function drawHeader(){
	dim.yOffset += fonts.songTitleSize;
	draw.textCenter('Song Title', fonts.songTitleSize, dim.canvasCenter, dim.yOffset);
	dim.yOffset += fonts.songSubtitleSize + 10;
	draw.textCenter('Artist', fonts.songSubtitleSize, dim.canvasCenter, dim.yOffset);
	dim.yOffset += fonts.songNoteSize + 10;
	draw.textCenter('Album', fonts.songNoteSize, dim.canvasCenter, dim.yOffset);
        dim.yOffset += dim.marginSongTop;
}

function drawTrebleCleff(x, y){

}
