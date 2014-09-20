var width = 50;
var height = 200;

$(window).resize(resize);
window.onorientationchange = resize; //needed?

document.addEventListener('DOMContentLoaded', load, false);

//bunny shit
var texture = PIXI.Texture.fromImage("bunny.png");
var bunny = new PIXI.Sprite(texture);
var renderer;

bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;
bunny.position.x = width / 2;
bunny.position.y = height / 2;


function load(){
	renderer = PIXI.autoDetectRenderer(width, height);
	renderer.view.className = "rendererView";
	
	//add renderer to document
	$("#gameCanvas").append(renderer.view);
	
	stage = new PIXI.Stage(0xdedede);
	
	document.body.appendChild(renderer.view);
	resize();
	
	requestAnimFrame(update);
}

function resize(){
	//width = $(window).width();
	//height = $(window).height();
	
	renderer.resize(width, height);
		
	bunny.position.x = width/2;
	bunny.position.y = height/2;
	stage.addChild(bunny);
}

function update(){
	bunny.rotation += 0.1;

	renderer.render(stage);
	requestAnimFrame(update);
}