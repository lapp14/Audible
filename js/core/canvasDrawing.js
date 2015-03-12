var draw = {
	setCanvas: function(canvas){
		canvas.style.width  = '100%';
		canvas.style.height = '1000px';
		this.canvas = canvas;

		/*this.canvas.addEventListener('click', function(event){
			var rect = canvas.getBoundingClientRect();
			var x = event.pageX - rect.left,
				y = event.pageY - rect.top;

			canvasClickEvent(x, y);


		}, false);*/

		return this.canvas;
	},

	setCanvasHeight: function(size){
		this.canvas.style.height = size + 'px';
	},
	
	getCanvas: function(){
		return this.canvas;
	},

	setContext: function(canvasType){
		this.context = this.canvas.getContext(canvasType);
		return this.context;
	},

	getContext: function(){
		return this.context;
	},
	
	line: function(x1, y1, x2, y2){
		this.context.beginPath();
		this.context.moveTo(x1, y1);
		this.context.lineTo(x2, y2);
		this.context.stroke();
		return this;
	},
	
	horizontalLine: function(x, y, length){
		this.context.beginPath();
		this.context.moveTo(x, y);
		this.context.lineTo(x, y + length);
		this.context.stroke();
		return this;
	},

	textCenter: function(text, size, x, y){
		this.context.textAlign = 'center';
		this.context.font = size + 'px Crimson Text, serif';
		this.context.fillText(text, x, y);
	},

	textMusicCenter: function(text, size, x, y){
		this.context.textAlign = 'center';
		this.context.font = size + 'px Lassus, serif';
		this.context.fillText(text, x, y);
	},

	textBold: function(text, size, x, y){
		this.context.textAlign = 'left';
		this.context.font = 'bold ' + size + 'px Crimson Text, serif';
		this.context.fillText(text, x, y);
	},

	textBoldCenter: function(text, size, x, y){
		this.context.textAlign = 'center';
		this.context.font = 'bold ' + size + 'px Crimson Text, serif';
		this.context.fillText(text, x, y);
	},

	translate: function(x, y){
		this.context.translate(x, y);
	},

	drawNote: function(note, x, y){
		var rect = this.canvas.getBoundingClientRect();
		this.context.save();
		this.context.scale(dim.staffSpacing / 12, dim.staffSpacing / 12);
		
		if(note.indexOf('whole') > -1 || note.indexOf('_inv') > -1) {
			this.context.translate(x, y - 5);
		} else { 
			this.context.translate(x, y - 39);
		}

		this.context.drawSvg(note);
		this.context.restore();

	},

/*	noteHalf: function(size, x, y){
		this.drawNote('svg/note_half.svg', x, y);
	},

	noteHalfInv: function(size, x, y){
		this.drawNote('svg/note_half_inv.svg', x, y + 35);
	},

	noteQuarter: function(size, x, y){
		this.drawNote('svg/note_quarter.svg', x, y);
	},

	noteQuarterInv: function(size, x, y){
		this.drawNote('svg/note_quarter_inv.svg', x, y + 35);
	},

	noteWhole: function(size, x, y){
		this.drawNote('svg/note_whole.svg', x, y);
	},*/


	drawTimeSignature: function(upper, lower, x, y){
		this.context.save();
		this.context.translate(x, y);
		this.textBold(upper, 40, 0, 25);
		this.textBold(lower, 40, 0, 50);
		this.context.restore();

	},

	drawClef: function(type, x, y){
		this.context.save();
		this.context.translate(x, y - (dim.staffSpacing));
		this.context.drawSvg('svg/clef.svg');
		this.context.restore();

	}
};


var staffDrawing = {
    horizontalLine: function(context, x, y, length){
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + length, y);
        context.stroke();
    }
};