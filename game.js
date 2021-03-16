function createGameScene() {
  game_Scene = wy.addScene("level1");
  game_Scene.setBackgroundTexture(t_bckg1);
}

function gameFunction() {
  game_Scene.addBackgroundScroll(speedX / 10, 0.0);
  scroll_pos += speedX;

  progress = Math.floor(scroll_pos / 2) % 10;
  if (prev_progress != progress) {
    levelLayout(progress);
    prev_progress = progress;
  }

  moveWorld();
  moveCamera();
  checkIfOOB();

  generateEnemies();
  generateBullets();

  playerInput();

  game_Scene.OBJECTS = [];
  for (var i = 0; i < layout.length; i++)
    game_Scene.addObject(layout[i]);

  for (var i = 0; i < enemies.length; i++)
    game_Scene.addObject(enemies[i]);

  for (var i = 0; i < bullets.length; i++)
    game_Scene.addObject(bullets[i]);

  for (var i = 0; i < pBullets.length; i++)
    game_Scene.addObject(pBullets[i]);

  for (var i = 0; i < explosions.length; i++)
    game_Scene.addObject(explosions[i]);

  if (!playerDown)
    game_Scene.addObject("Player", m_player, t_player, playerPos[0], playerPos[1], playerPos[2], playerRotX, playerRotY, playerRotZ, 0.1, 0.1, 0.1);

  if (!playerDown)
    collisionDetection();

  if (playerDown) {
    score = 0;
    document.getElementById("overlay_score").innerHTML = "Score: " + score;
    game_Scene.grayscale = true;
    game_Scene.setGrayscale(0.75 - counter / 100, 0.75 - counter / 100, 0.75 - counter / 100);
    if (counter > 120)
      initDefault();

    counter++;
  }
}

function moveWorld() {
  var planet1 = game_Scene.getObject("planetObj1");
  if (planet1 != null)
    planet1.addRotation(0, 0.2, 0);

  var planet2 = game_Scene.getObject("planetObj2");
  if (planet2 != null)
    planet2.addRotation(0, 0.1, 0);

  var planet3 = game_Scene.getObject("planetObj3");
  if (planet3 != null)
    planet3.addRotation(0, 0.05, 0.02);


  for (var i = 0; i < layout.length; i++)
    layout[i].position[0] -= speedX * 10;

  for (var i = 0; i < enemies.length; i++) {
    enemies[i].position[0] -= playerSpeed * 1.05;
    if (enemies[i].name == "enemy1") {
      if (enemies[i].position[1] > minY / 1.1) {
        enemies[i].position[1] -= playerSpeed / 4;
        if (enemies[i].rotation[0] < -30)
          enemies[i].addRotation(3, 0, 0)
      } else {
        if (enemies[i].rotation[0] > -90)
          enemies[i].addRotation(-3, 0, 0)
      }
    }
    if (enemies[i].name == "enemy0") {
      if (enemies[i].position[1] < maxY / 1.1) {
        enemies[i].position[1] += playerSpeed / 4;
        if (enemies[i].rotation[0] < -30)
          enemies[i].addRotation(3, 0, 0)
      } else {
        if (enemies[i].rotation[0] > -90)
          enemies[i].addRotation(-3, 0, 0)
      }
    }
  }

  for (var i = 0; i < bullets.length; i++)
    bullets[i].position[0] -= playerSpeed * 1.66;

  for (var i = 0; i < pBullets.length; i++)
    pBullets[i].position[0] += playerSpeed * 1.66;

  for (var i = 0; i < explosions.length; i++) {
    explosions[i].addLightning(0.06, 0.06, 0.05);
    explosions[i].addScale(0.06, 0.06, 0.06);
    explosions[i].addOpacity(-0.03);
  }

}

function moveCamera() {
  var cy = -playerPos[1] / 2;
  if (cy > 1.0)
    cy = 1.0
  if (cy < -1.0)
    cy = -1.0

  game_Scene.camPos = [0, cy, 0];
}

function delObj(arr, i) {
  var newArr = arr;
  newArr.splice(i, 1);
  return newArr;
}
