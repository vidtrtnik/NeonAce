var scaleCoef = 0.005;
var selection = 1;
var startGame = false;

var rotx = 0;
var roty = 0;
var rotz = 90;

function createMainMenuScene() {
  mainmenu_Scene = wy.addScene("MainMenu");
  mainmenu_Scene.setBackgroundTexture(t_bckg2);

  var logo2 = new wy3d_Object("mainmenu_logo2", m_cube, t_neonacelogo2, 0, 2.85, -10, 15, 0, -90, 0.7, 1.25, 1.25);
  var wy3dlogo = new wy3d_Object("wy3d_logo", m_cube, t_wy3dlogo, 8.5, -4, -15, 0, 0, -90);
  var logo = new wy3d_Object("mainmenu_logo", m_player, t_player, 0, 0.0, -20, rotx, roty, rotz, 0.2, 0.2, 0.2, 0.75, 0.75, 0.75);
  //var logo = new wy3d_Object("mainmenu_logo", m_cube, t_neonacelogo, 0, 1.5, -10, 0,0,-90, 1.6,1.6,1.6);
  var choice1 = new wy3d_Object("c1play", m_cube, t_choiceStart, -2, -3, -10, -15, 15, -90, 0.5, 1, 1);
  var choice2 = new wy3d_Object("c2github", m_cube, t_choiceGithub, 2, -3, -10, -15, -15, -90, 0.5, 1, 1);

  mainmenu_Scene.addObject(logo);
  mainmenu_Scene.addObject(logo2);
  mainmenu_Scene.addObject(wy3dlogo);
  mainmenu_Scene.addObject(choice1);
  mainmenu_Scene.addObject(choice2);
}

function mainMenu_gameFunction() {
  var choice1 = mainmenu_Scene.getObject("c1play");
  var choice2 = mainmenu_Scene.getObject("c2github");
  choice1.setLightning(1, 1, 1);
  choice2.setLightning(1, 1, 1);
  var choice = null;

  mainmenu_Scene.addBackgroundScroll(0.0, 0.002);

  if (selection === 1) {
    choice2.setLightning(0.5, 0.5, 0.5);
    choice = choice1;
  }
  if (selection === 2) {
    choice1.setLightning(0.5, 0.5, 0.5);
    choice = choice2;
  }

  choice.addScale(0, scaleCoef, 0);

  if (choice.scale[1] > 1.1) {
    scaleCoef *= -1;
    choice.setScale(0.5, 1.1, 1);
  }

  if (choice.scale[1] < 0.9) {
    scaleCoef *= -1;
    choice.setScale(0.5, 0.9, 1);
  }

  menuInput();

  if (startGame) {
    mainmenu_Scene.stop();

    wy.renderScene(game_Scene, gameFunction);
    return;
  }



  var logo = mainmenu_Scene.getObject("mainmenu_logo");
  logo.addRotation(0, 0.5, 0);

  var wy3dlogo = mainmenu_Scene.getObject("wy3d_logo");
  wy3dlogo.addRotation(1, -1, 1);
}

function menuInput() {
  if (wy.input.isDown("left"))
    selection--;

  if (wy.input.isDown("right"))
    selection++;

  if (wy.input.isDown("space") && selection == 1)
    startGame = true;

  if (wy.input.isDown("space") && selection == 2)
    window.open('https://www.github.com/vidtrtnik', '_blank');

  if (selection > 2)
    selection = 1;

  if (selection < 1)
    selection = 2;

  if (wy.input.isDown("P")) {
    mouseEnabled = !mouseEnabled;
    document.getElementById("overlay_mouse").innerHTML = mouseEnabled | 0;
  }
}
