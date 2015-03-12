



/* 
 *	this should be changed to represent a cleff, treble, bass etc
 *  so that the same notes are placed differently on bass and treble staves
 *//*
var Song = (function() {
	//constructor
	function Song(){
		this._items = [];
		this._musicStaves = [];
		this._musicStaves[0] = new StaffStandard();
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

	Song.prototype.getStaff = function(i) {
		return this._musicStaves[i];
	};

	Song.prototype.getNumStaves = function() {
		return this._musicStaves.length;
	};

	Song.prototype.getLength = function() {
		return this._items.length;
	};

	Song.prototype.drawSong = function() {
		this._musicStaves = [];

		dim.yOffset = 0;

		var staffWidth = dim.canvasWidth - 2 * dim.marginSide;
		var staff = new Staff(staffWidth);

		//first staff
		staff.setPosition(dim.marginSide, dim.marginTop);
		this._musicStaves[0] = staff;

		index = 0;

		for(var i = 0, len = this._items.length; i < len; i++) {

			//add new staff if currentStaff is full
			if(this._musicStaves[index].getCurrentNotePosition() > this._musicStaves[index].getWidth() - dim.staffPadding) {
				dim.yOffset += this._offsetIncrement;

				var s = new Staff(staffWidth);
				s.setPosition(dim.marginSide, dim.marginTop + dim.yOffset);

				this._musicStaves[this._musicStaves.length] = s;
				index++;
			}

			this._musicStaves[index].addItem(this.getItem(i));
		}

		for(var i = 0, len = this._musicStaves.length; i < len; i++) {
			this._musicStaves[i].drawStaff();

		}
	};

	return Song;
}());

*/