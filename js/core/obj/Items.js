
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

			case 'eighth':
				this._noteSvg = 'svg/note_eighth';
				this._notePadding = 35;
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
}());

var TimeSignature = (function() {

	//constructor
	function TimeSignature(upper, lower) {
		this._upper = upper;
		this._lower = lower;
		this._padding = 50;
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

}());


var Clef = (function() {

	//constructor
	function Clef(type) {
		this._type = type;
		this._padding = 80;
	};

	Clef.prototype.setPosition = function(Point) {
		this._position = Point;
	};

	Clef.prototype.getPosition = function() {
		return this._position;
	};

	Clef.prototype.getPadding = function() {
		return this._padding;
	};

	Clef.prototype.drawOnStaff = function() {	
		draw.drawClef(this._type, this._position.getX(), this._position.getY());
	};

	return Clef;

}());
