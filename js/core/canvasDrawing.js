var draw = {
	setCanvas: function(canvas){
		canvas.style.width  = '100%';
		canvas.style.height = '1000px';
		this.canvas = canvas;
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

	textBoldCenter: function(text, size, x, y){
		this.context.textAlign = 'center';
		this.context.font = 'bold ' + size + 'px Crimson Text, serif';
		this.context.fillText(text, x, y);
	},

	translate: function(x, y){
		this.context.translate(x, y);
	}
};