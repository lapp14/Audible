var Staff = (function() {
    
    var canvas, foreground, context;
    
    function Staff(){
        
    };
    
    Staff.prototype.renderCanvas = function(){
        var width = dim.canvasWidth;
        var height = dim.staffHeight;
        canvas = document.createElement("canvas");
        foreground = document.createElement("canvas");
        
        //stafftest.html
       // canvas = document.getElementById("canv");
        
        context = canvas.getContext("2d");
        canvas.height = height;
        canvas.width = width;
        canvas.style.height = height + 'px';
        canvas.style.width = width + 'px';
                
        var middle = height / 2;
        var length = width - 2 * dim.getSideMargin();
        
        horizontalLine(dim.getSideMargin(), middle, length);
        horizontalLine(dim.getSideMargin(), middle + dim.staffSpacing, length);
        horizontalLine(dim.getSideMargin(), middle + 2 * dim.staffSpacing, length);
        horizontalLine(dim.getSideMargin(), middle - dim.staffSpacing, length);
        horizontalLine(dim.getSideMargin(), middle - 2 * dim.staffSpacing, length);
    };
    
    var horizontalLine = function(x, y, length){
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + length, y);
        context.stroke();
    };
        
    Staff.prototype.getCanvas = function(){
        return canvas;
    };
    
    return Staff;
}());
    


/*
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
}());

*/