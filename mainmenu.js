var scaleCoef = 0.005;
var selection = 1;
var pressTime = null;
var startGame = false;

function createMainMenuScene()
{
	mainmenu_Scene = wy.addScene("MainMenu");
	mainmenu_Scene.setBackgroundTexture(t_bckg2);
	
	var logo = new wy3d_Object("mainmenu_logo", m_cube, t_neonacelogo, 0, 1.5, -10, 0,0,-90, 1.6,1.6,1.6);
	var choice1 = new wy3d_Object("c1play", m_cube, t_choiceStart, -2,-2.5,-10, -15,15,-90, 0.5,1,1);
	var choice2 = new wy3d_Object("c2github", m_cube, t_choiceGithub, 2,-2.5,-10, -15,-15,-90, 0.5,1,1);
	
	mainmenu_Scene.addObject(logo);
	mainmenu_Scene.addObject(choice1);
	mainmenu_Scene.addObject(choice2);
	
	pressTime = new Date().getTime();
}

function mainMenu_gameFunction()
{
	var choice1 = mainmenu_Scene.getObject("c1play");
	var choice2 = mainmenu_Scene.getObject("c2github");
	choice1.setLightning(1,1,1);
	choice2.setLightning(1,1,1);
	var choice = null;
	
	if(selection === 1)
	{
		choice2.setLightning(0.5, 0.5, 0.5);
		choice = choice1;
	}
	if(selection === 2)
	{
		choice1.setLightning(0.5, 0.5, 0.5);
		choice = choice2;
	}
	
	choice.addScale(0,scaleCoef,0);
		
	if(choice.scale[1] > 1.1)
	{
		scaleCoef *= -1;
		choice.setScale(0.5,1.1,1);
	}

	if(choice.scale[1] < 0.9)
	{
		scaleCoef *= -1;
		choice.setScale(0.5,0.9,1);
	}
	
	menuInput();
	
	if(startGame)
	{
		mainmenu_Scene.stop();
		
		wy.renderScene(game_Scene, gameFunction);
		return;
	}
}

function menuInput()
{
	if(wy.input.isDown("left"))
		selection--;
	
	if(wy.input.isDown("right"))
		selection++;
		
	if (wy.input.isDown("space") && selection == 1)
		startGame = true;
		
	if (wy.input.isDown("space") && selection == 2)
		window.open('https://www.github.com/vidtrtnik', '_blank');
    	
	if(selection > 2)
		selection = 1;
		
	if(selection < 1)
		selection = 2;
}
