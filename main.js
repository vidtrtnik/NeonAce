var wy = null;

var mainmenu_Scene = null;
var game_Scene = null;

function start() {
  var canvas = document.getElementById("canvas");
  resy = window.innerHeight * 0.85;
  resx = resy * (16 / 9);
  canvas.width = resx;
  canvas.height = resy;

  wy = new Wineyard3D(canvas, resx, resy, 1);
  loadResources(wy);

  createMainMenuScene();
  createGameScene();

  wy.renderScene(mainmenu_Scene, mainMenu_gameFunction);
}
