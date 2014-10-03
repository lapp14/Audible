var musicStaves = [];
var tabStaves = [];

var staffObjects = [];

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
		switch(type) {
			case 'whole':
				break;

			case 'half':
				break;


			//quarter
			default:
				break;

		}

		this._letter = letter;
		this._octave = octave;
	};

	Note.prototype.setPosition = function(Point) {
		this._position = Point;
	};

	Note.prototype.getPosition = function() {
		return this._position;
	};

	return Note;
})();


var Staff = (function() {

	//constructor
	function Staff(x, y, width) {
		this._position = new Point(dim.getSideMargin(), dim.getTopMargin() + dim.yOffset);
		this._width = width;

		this._notes = [];
	};

	Staff.prototype.getPosition = function() {
		return this._position;
	};


	Staff.prototype.getWidth = function() {
		return this._width;
	};

	Staff.prototype.addNote = function(note) {
		
		
		this._notes[this._notes.length] = note;
	};

	Staff.prototype.drawStaff = function() {
		var x1 = this.getPosition().getX();
		var y1 = this.getPosition().getY() + dim.yOffset;

		var x2 = this.getWidth();
		var y2 = this._position.getY() + dim.yOffset;

		draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
		dim.yOffset += dim.staffSpacing;
		draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);

		draw.line(x1, y1, x1, y2 + 4 * dim.staffSpacing);
		draw.line(x2, y1, x2, y2 + 4 * dim.staffSpacing);

		// draw each note on the staff
		for(var i = 0; i < this._notes.length; i++){

		}

		dim.yOffset += 8 * dim.staffSpacing;

		if(settings.displayTab){
			x1 = dim.getSideMargin();
			y1 = dim.getTopMargin() + dim.yOffset;

			x2 = draw.getCanvas().width - dim.getSideMargin();
			y2 = dim.getTopMargin() + dim.yOffset;

			draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
			dim.yOffset += dim.staffSpacing;
			draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
			dim.yOffset += dim.staffSpacing;
			draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
			dim.yOffset += dim.staffSpacing;
			draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
			dim.yOffset += dim.staffSpacing;
			draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);
			dim.yOffset += dim.staffSpacing;
			draw.line(x1, dim.getTopMargin() + dim.yOffset, x2, dim.getTopMargin() + dim.yOffset);

			draw.line(x1, y1, x1, y2 + 5 * dim.staffSpacing);
			draw.line(x2, y1, x2, y2 + 5 * dim.staffSpacing);
			dim.yOffset += 8 * dim.staffSpacing;
		}

	};

	return Staff;	
})();