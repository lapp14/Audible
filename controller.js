var Audible = angular.module('audible', []);

Audible.controller('MenuController', function($scope) {
	$scope.menuitems = [
		{
			'title' : 'Guitar',
			'graphic' : './svg/menu/main_guitar.svg'
		},
		{
			'title' : 'Bass',
			'graphic' : './svg/menu/main_bass.svg'
		},
		{
			'title' : 'Piano',
			'graphic' : './svg/menu/main_piano.svg'
		},
		{
			'title' : 'Settings',
			'graphic' : './svg/menu/main_settings.svg'
		}
	];

	$scope.menuLeftWidth = 140;
	$scope.menuScreen = "none";

	$scope.templates =
       [ { name: 'template1.html', url: 'menu_main.html'} ];
     $scope.template = $scope.templates[0];
	
});

Audible.directive('getMenuWidth', function() {
    return {
        restrict: "A",
        scope: {
            "menuLeftWidth": '='
        },
        link: function(scope, element) {
            scope.$watch("menuLeftWidth", function (value) {
                console.log("menuLeftWidth: " + scope.menuLeftWidth);
                $(element).css('width', scope.menuLeftWidth + "px");
            }, false);
        }
    }
});

Audible.directive('getCanvasLeft', function() {
    return {
        restrict: "A",
        scope: {
            "canvasLeft": '='
        },
        link: function(scope, element) {
            scope.$watch("canvasLeft", function (value) {
                console.log("canvasLeft: " + scope.canvasLeft);
                $(element).css('left', scope.canvasLeft + "px");
            }, false);
        }
    }
});


