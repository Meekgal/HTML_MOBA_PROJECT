var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Moba_Load_Area', { preload: preload, create: create, update: update, render: render });

function preload() {
	game.load.image('hero', './images/CharacterTest.jpg');
	
}

var s;

function create() {
	
    s = game.add.image(game.world.centerX, game.world.centerY, 'hero');
    game.stage.backgroundColor = "#fff";
    game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
    
}

function update() {

	if(game.input.mouse.button === Phaser.Mouse.RIGHT_BUTTON) {
		game.add.tween(s).to({x:0,y:0},1000).start();    
	    console.log("x:"+ game.input.mousePointer.x +"," + "y:" + game.input.mousePointer.y);
	}
	else{
		console.log(game.input)
	}
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        s.x -= 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        s.x += 1;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        s.y -= 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        s.y += 1;
    }

}

function render() {
    //game.debug.spriteInfo(s, 20, 32);

}

var Moba = Moba || {};

	var BaseUnit = function(){
		var HP;
		var DEf;
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
