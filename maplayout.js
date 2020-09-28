function levelLayout(p) {
  if (p >= 10)
    return;

  if (!monumentDrawn)
    drawMonument()

  var h1 = level1_map[0 + p];
  var h2 = level1_map[10 + p];
  var h3 = level1_map[20 + p];

  var ground1 = new wy3d_Object("ground", m_ground, t_ground, groundPos[0] - 25, groundPos[1], groundPos[2], 0, 0, 0, 25, 20, 20);
  layout.push(ground1);
  var ground2 = new wy3d_Object("ground", m_ground, t_ground, groundPos[0] + 25, groundPos[1], groundPos[2], 0, 0, 0, 25, 20, 20);
  layout.push(ground2);
  if (h1 == 1) {
    var planet = new wy3d_Object("planetObj1", m_planet, t_planet1, 85.0, 7.0, -80.0, 0, 0, 0, 25, 25, 25, 0.2, 0.2, 0.2);
    layout.push(planet);
  } else if (h1 == 2) {
    var planet = new wy3d_Object("planetObj2", m_planet, t_planet2, 75.0, 15.0, -80.0, 0, 0, 0, 18, 18, 18, 0.2, 0.2, 0.2);
    layout.push(planet);
  } else if (h1 == 3) {
    var planet = new wy3d_Object("planetObj3", m_planet, t_planet3, 5.0, 17.0, -80.0, 10, 0, 10, 15, 15, 15, 0.2, 0.2, 0.2);
    layout.push(planet);
  }

  if (h2 == 1) {
    generateBuildings();
  }
}

function drawMonument() {
  var monument1 = new wy3d_Object("Monument1", m_cube, t_wy3dlogo, groundObjectsPos[0] + 10, groundObjectsPos[1] + 10, groundObjectsPos[2] - 10, -90, 0, 0, 4, 4, 4);
  layout.push(monument1);
  var monument2 = new wy3d_Object("Monument2", m_cube, t_neonacelogo, groundObjectsPos[0] + 10, groundObjectsPos[1] + 2, groundObjectsPos[2] - 10, -90, 0, 0, 4, 4, 4);
  layout.push(monument2);
  monumentDrawn = true;
}

function checkIfOOB() {
  for (var i = 0; i < layout.length; i++)
    if (layout[i].position[0] < -90.0)
      layout = delObj(layout, i);


  for (var i = 0; i < enemies.length; i++)
    if (enemies[i].position[0] < -20.0)
      enemies = delObj(enemies, i);


  for (var i = 0; i < bullets.length; i++) {
    bullets[i].addRotation(5, 0, 0)
    if (bullets[i].position[0] < -20.0)
      bullets = delObj(bullets, i);
  }

  for (var i = 0; i < pBullets.length; i++) {
    pBullets[i].addRotation(5, 0, 0)
    if (pBullets[i].position[0] > 15.0)
      pBullets = delObj(pBullets, i);
  }

  for (var i = 0; i < tExplosions.length; i++) {
    var time_now = new Date().getTime();
    if (time_now - tExplosions[i] > 550) {
      tExplosions = delObj(tExplosions, i);
      explosions = delObj(explosions, i);
    }
  }
}
