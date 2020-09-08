var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f0ad012b-c206-4b7b-8767-93346ae27be7"],"propsByKey":{"f0ad012b-c206-4b7b-8767-93346ae27be7":{"name":"apple_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"a3yIURmhXwnH.ades69N1ni5TZ0_6OXl","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/f0ad012b-c206-4b7b-8767-93346ae27be7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var target = createSprite(180,30,50,30);
target.shapeColor = "black";


var obj1 = createSprite(25,223,300,40);
obj1.shapeColor = "red";

obj1.velocityX = 2;


var obj2 = createSprite(250,110,300,40);
obj2.shapeColor = "purple";

obj2.velocityX = -2;

var ball = createSprite(160,360,20,20);
ball.shapeColor = "blue";

ball.velocityX = 2;
ball.velocityY = 3;

function draw() {
  background("green");
  createEdgeSprites();
  ball.bounceOff(edges);
  obj1.bounceOff(edges);
  obj2.bounceOff(edges);
  
  if(keyDown(UP_ARROW))
  {
    ball.velocityX = 0;
    ball.velocityY = -3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    ball.velocityX = 0;
    ball.velocityY = 3;
  }
  if(keyDown(LEFT_ARROW))
  {
    ball.velocityX = -2;
    ball.velocityY = 0;
  }
  if(keyDown(RIGHT_ARROW))
  {
    ball.velocityX = 2;
    ball.velocityY = 0;
  }
  
  if(ball.isTouching(obj1) || ball.isTouching(obj2))
  {
    textSize(24);
    text("Game Over",200,180);
    ball.velocityX = 0;
    ball.velocityY = 0;
    obj1.velocityX = 0;
    obj2.velocityX = 0;
  }
  
  if(ball.isTouching(target))
  {
    textSize(24); 
    text("You won",200,180);
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
