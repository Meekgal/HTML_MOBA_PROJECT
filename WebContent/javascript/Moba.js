var game = new Phaser.Game(1000, 1000, Phaser.CANVAS, 'Moba_Load_Area', { preload: preload, create: create, update: update, render: render });

function preload() 
{
	game.load.image('hero', './images/CharacterTest.jpg');
	game.load.image('tower', './images/towerTemp.png');
	
}

var tower;
var hero;
var tween;

function create() 
{
	//look into game.physics.arcade
	hero = game.add.image(game.world.centerX, game.world.centerY, 'hero');
	tower = game.add.image(game.world.center +20, game.world.centerY + 20, 'tower');
    game.stage.backgroundColor = "#aaa";
    game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
    
}

function testMouseClick(){
	game.camera.follow();
    game.physics.arcade.moveToPointer(hero, 100);
}

function update() 
{

	var isStillDown;
	if (game.input.activePointer.isDown && !isStillDown)
    {
		isStillDown= true;
		var newX =game.input.mousePointer.x;
		var newY =game.input.mousePointer.y;
		var distance = Math.sqrt(Math.pow(newX - hero.x,2) + Math.pow(newY - hero.y,2));
		var time = distance/ .5;
		console.log("time:"+ time +"," + "distance:" + distance);
		
		tween =game.add.tween(hero).to({x:game.input.mousePointer.x,y:game.input.mousePointer.y},time,Phaser.Easing.Linear.None).start();    
		
		console.log("x:"+ game.input.mousePointer.x +"," + "y:" + game.input.mousePointer.y);
    }
	else if (game.input.activePointer.isUp)
	{
		isStillDown= false;
	}
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
    	hero.x -= 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
    	hero.x += 1;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
    	hero.y -= 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
    	hero.y += 1;
    }

}

function render() {
    //game.debug.spriteInfo(s, 20, 32);

}

var Moba = Moba || {};

	var BaseUnit = function(){
		var HP = 0;
		var DEf = 0;
		var Speed = 0;
		var locationX;
		var locationY;
	}
	BaseUnit.prototype.getHP = function(){
		return this.HP;
	}
	BaseUnit.prototype.getDEF = function(){
		return this.DEF;
	}
	BaseUnit.prototype.setHP = function(HP){
		//TODO: Add integer check
		this.HP = HP;
	}
	BaseUnit.prototype.getSpeed = function(){
		return this.DEF;
	}
	BaseUnit.prototype.setSpeed = function(Speed){
		//TODO: Add integer check
		this.Speed = Speed;
	}
	BaseUnit.prototype.setXLocation = function(locationX){
		this.locationX = locationX;
	}
	BaseUnit.prototype.getXLocation = function(){
		return locationX;
	}
	BaseUnit.prototype.setYLocation = function(locationY){
		this.locationY = locationY;
	}
	BaseUnit.prototype.getYLocation = function(){
		return locationY;
	}

	//            //
	//Tower Object//
	//            //
	var tower = function(){	
		var atkPower = 0;
		tower.prototype = Object.Create(BaseUnit.prototype);
	}
	tower.prototype.attack =function()
	{
		
		//generate tween that follows player.
	}
	
	