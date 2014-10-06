var dim = {			
	marginSide: 30,
	marginTop: 20,
	
	canvasWidth: 0,
	canvasHeight: 0,

	songPixelHeight: 0,

	canvasCenter: 0,

	yOffset: 0,

	staffSpacing: 12,
	staffSpacingDefault: 12,

	staffPadding: 30,
	staffPaddingDefault: 30,

	notesOffStaffSpace: 20, //shifts staff down to leave room for notes above the staff (def: 20)

	sizeDefault: 12,

	getSideMargin: function(){
		return this.marginSide;
	},

	getTopMargin: function(){
		return this.marginTop;
	}		
};