var dim = {			
    marginSide: 30,
    marginTop: 20,
    marginSongTop: 10,
    
    containerHeight: 0, //width and height of canvas containert div. Updated by resize
    containerWidth: 0,

    canvasWidth: 0, //these are always initiated by the program on load
    canvasHeight: 0,

    yOffset: 0,

    staffSpacing: 12,
    staffSpacingDefault: 12,

    staffHeight: 160,   // Height of staff canvas
    staffHeightDefault: 160,
    
    songPixelHeight: 0, //actual pixel height of drawing surface

    //notesOffStaffSpace: 80, //shifts staff down to leave room for notes above the staff (def: 20)
    //sizeDefault: 10,
    
    
};

var fonts = {
    songTitleSize: 30,
    songSubtitleSize: 20,
    songNoteSize: 14
}