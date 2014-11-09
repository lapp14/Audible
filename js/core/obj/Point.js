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
}());
