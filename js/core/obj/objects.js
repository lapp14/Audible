/* 
 *	this should be changed to represent a cleff, treble, bass etc
 *  so that the same notes are placed differently on bass and treble staves
 */
var Song = (function() {
	//constructor
	function Song(){
		this._items = [];
		this._musicStaves = [];
		this._offsetIncrement = 120;

		this.calculateOffsetIncrement();
	};

	Song.prototype.calculateOffsetIncrement = function() {
		if(settings.displayTab)
			this._offsetIncrement = 260;
		else
			this._offsetIncrement = 120;
	};

	Song.prototype.addItem = function(item) {

		if(item instanceof Note) {
			var letter = item._letter;
			var octave = item._octave;
			var padding = dim.notesOffStaffSpace;

			switch(letter) {
				case 'e':
					if(octave == 5) {
						item.setY(padding + 5);
					} else {  //octave == 4
						item.setY(padding + 48);
					}

					break;

				case 'f':
					if(octave == 5) {
						item.setY(padding);
					} else {  //octave == 4
						item.setY(padding + 41);
					}
					break;

				case 'g':
					if(octave == 5) {
						item.setY(padding - 6);
					} else {  //octave == 4
						item.setY(padding + 36);
					}
					break;

				case 'a':
					if(octave == 5) {
						item._drawStaffLine = true;
						item.setY(padding - 11);
					} else {  //octave == 4
						item.setY(padding + 29);
					}
					break;

				case 'b':
					//only octave 4 on treble staff
					item.setY(padding + 24);
					break;

				case 'c':
					if(octave == 5) {
						item.setY(padding + 17);
					} else { //octave == 4
						item._drawStaffLine = true;
						item.setY(padding + 59);
					}
					break;

				case 'd':
					if(octave == 5) {
						item.setY(padding + 12);
					} else { //octave == 4
						item.setY(padding + 53);
					}
					break;
			}


		}

		this._items[this._items.length] = item;
	};

	Song.prototype.getItem = function(i) {
		return this._items[i];
	};

	Song.prototype.getLength = function() {
		return this._items.length;
	};

	Song.prototype.drawSong = function() {
		this._musicStaves = [];

		var staffWidth = dim.canvasWidth - 2 * dim.marginSide;
		var staff = new Staff(staffWidth);
		var currentStaff;

		//first staff
		staff.setPosition(dim.marginSide, dim.marginTop);
		this._musicStaves[0] = staff;

		currentStaff = this._musicStaves[0];

		for(var i = 0, len = this._items.length; i < len; i++) {

			//add new staff if currentStaff is full
			if(currentStaff.getCurrentNotePosition() > currentStaff.getWidth() - dim.staffPadding) {
				dim.yOffset += this._offsetIncrement;

				var s = new Staff(staffWidth);
				s.setPosition(dim.marginSide, dim.marginTop + dim.yOffset);

				this._musicStaves[this._musicStaves.length] = s;
				currentStaff = this._musicStaves[this._musicStaves.length - 1];
			}

			currentStaff.addItem(this.getItem(i));
		}

		for(var i = 0, len = this._musicStaves.length; i < len; i++) {
			this._musicStaves[i].drawStaff();

		}

		console.log("dim.songPixelHeight: " + dim.songPixelHeight);
	};

	return Song;
})();




/**
 *	Specifies an x, y point in space
 *
 */

//var p1 = new Point(x, y);
var Point = (function() {	
	//constructor
	function Point(x, y){
		this._x = x;
		this._y = y;
	};

	Point.prototype.getX = function() {
		return this._x;
	};

	Point.prototype.getY = function() {
		return this._y;
	};

	Point.prototype.setX = function(x) {
		this._x = x;
	};

	Point.prototype.setY = function(y) {
		this._y = y;
	};

	return Point;
})();



var Note = (function() {

	//constructor
	function Note(letter, type, octave){
		
		this._letter = letter;
		this._type = type;
		this._octave = octave;
		this._position = new Point(0, 0);
		this._drawStaffLine = false;
		this._isInverted = false;

		switch(this._type) {
			case 'whole':
				this._noteSvg = 'svg/note_whole';
				this._notePadding = 85;
				break;

			case 'half':
				this._noteSvg = 'svg/note_half';
				this._notePadding = 85;
				break;

			//quarter
			default:
				this._noteSvg = 'svg/note_quarter';
				this._notePadding = 85;
				break;
		}

		if(type != 'whole' && octave > 4) {
			this._isInverted = true;
			this._noteSvg += '_inv.svg';
		} else {
			this._noteSvg += '.svg';
		}
	};

	Note.prototype.setPosition = function(Point) {
		this._position = Point;
	};

	Note.prototype.setX = function(x) {
		this._position.setX(x);
	};

	Note.prototype.setY = function(y) {
		this._position.setY(y);
	};

	Note.prototype.getPosition = function() {
		return this._position;
	};

	Note.prototype.getPadding = function() {
		return this._notePadding;
	};

	Note.prototype.drawOnStaff = function() {	
		if(this._drawStaffLine) {
			var p = this.getPosition();			

			draw.line(p.getX() - 10, p.getY(), p.getX() + 25, p.getY());
		}

		draw.drawNote(this._noteSvg, this._position.getX(), this._position.getY());
	};

	return Note;
})();

var TimeSignature = (function() {

	//constructor
	function TimeSignature(upper, lower) {
		this._upper = upper;
		this._lower = lower;
		this._padding = 80;
	};

	TimeSignature.prototype.setPosition = function(Point) {
		this._position = Point;
	};

	TimeSignature.prototype.getPosition = function() {
		return this._position;
	};

	TimeSignature.prototype.getPadding = function() {
		return this._padding;
	};

	TimeSignature.prototype.drawOnStaff = function() {	
		draw.drawTimeSignature(this._upper, this._lower, this._position.getX(), this._position.getY());
	};

	return TimeSignature;

})();


var Staff = (function() {

	//constructor
	function Staff(width) {
		this._width = width;
		this._currentNotePosition = dim.staffPadding;

		this._staffPosition = new Point(0, 0);
		this._items = [];
	};

	Staff.prototype.getPosition = function() {
		return this._position;
	};

	Staff.prototype.setPosition = function(x, y) {
		this._position = new Point(x, y);
	};

	//returns current point on the staff
	Staff.prototype.getCurrentNotePosition = function() {
		return this._currentNotePosition;
	};

	Staff.prototype.getWidth = function() {
		return this._width;
	};

	Staff.prototype.addItem = function(item) {

		//REMOVE ALL POSITION CALCULATIONS
		if(item instanceof Note)
			item.setX(this._currentNotePosition);
		else
			item.setPosition(new Point(this._currentNotePosition, dim.notesOffStaffSpace));

		this._items[this._items.length] = item;

		this._currentNotePosition += item.getPadding();
	};

	Staff.prototype.drawStaff = function() {
		draw.getContext().save();
		draw.getContext().translate(this.getPosition().getX(), this.getPosition().getY());

		var x1 = 0;
		var x2 = this.getWidth();
		var y = dim.notesOffStaffSpace;

		draw.line(x1, y, x2, y);
		y += dim.staffSpacing;
		draw.line(x1, y, x2, y);
		y += dim.staffSpacing;
		draw.line(x1, y, x2, y);
		y += dim.staffSpacing;
		draw.line(x1, y, x2, y);
		y += dim.staffSpacing;
		draw.line(x1, y, x2, y);

		draw.line(x1, dim.notesOffStaffSpace, x1, y);
		draw.line(x2, dim.notesOffStaffSpace, x2, y);

		

		// draw each note on the staff
		for(var i = 0, len = this._items.length; i < len; i++){
			this._items[i].drawOnStaff();
		}
	

		if(settings.displayTab){

			y += 5 * dim.staffSpacing;
			var top = y;

			draw.line(x1, y, x2, y);
			y += dim.staffSpacing;
			draw.line(x1, y, x2, y);
			y += dim.staffSpacing;
			draw.line(x1, y, x2, y);
			y += dim.staffSpacing;
			draw.line(x1, y, x2, y);
			y += dim.staffSpacing;
			draw.line(x1, y, x2, y);
			y += dim.staffSpacing;
			draw.line(x1, y, x2, y);


			draw.line(x1, top, x1, y);
			draw.line(x2, top, x2, y);
		}


		draw.getContext().restore();
	};

	return Staff;	
})();