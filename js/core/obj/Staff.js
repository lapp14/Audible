var StaffStandard = {
    renderBackground: function(){
        var width = dim.canvasWidth;
        var height = dim.staffHeight;
        
        this.background = {};        
        this.background.canvas = document.createElement("canvas");
        
        //stafftest.html
        // canvas = document.getElementById("canv");
        
        this.background.context = this.background.canvas.getContext("2d");
        this.background.canvas.height = height;
        this.background.canvas.width = width;
        this.background.canvas.style.height = height + 'px';
        this.background.canvas.style.width = width + 'px';
        
        var middle = height / 2;
        var length = width - 2 * dim.marginSide;
        
        staffDrawing.horizontalLine(this.background.context, dim.marginSide, middle, length);
        staffDrawing.horizontalLine(this.background.context, dim.marginSide, middle + dim.staffSpacing, length);
        staffDrawing.horizontalLine(this.background.context, dim.marginSide, middle + 2 * dim.staffSpacing, length);
        staffDrawing.horizontalLine(this.background.context, dim.marginSide, middle - dim.staffSpacing, length);
        staffDrawing.horizontalLine(this.background.context, dim.marginSide, middle - 2 * dim.staffSpacing, length);
       
    },
    
    getBackground: function(){
        return this.background;
    },
    
    getForeground: function(){
        var foreground = {};
        var width = dim.canvasWidth;
        var height = dim.staffHeight;
        
        foreground.canvas = document.createElement("canvas");
        foreground.context = foreground.canvas.getContext("2d");
        foreground.canvas.height = height;
        foreground.canvas.width = width;
        foreground.canvas.style.height = height + 'px';
        foreground.canvas.style.width = width + 'px';
        
        return foreground;
    }
};