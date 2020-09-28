function generateEnemies() {
  if (enemies.length < 6) {
    for (var i = 0; i < (maxEnemies - enemies.length); i++) {
      r = Math.random() * 3;

      var enemy;
      if (r <= 1)
        enemy = new wy3d_Object("enemy" + String(Math.floor(r)), m_enemy, t_enemy1, 12 + Math.random() * 20, -3 + Math.random() * 7.0, pZ, -90, 180, 0, 0.1, 0.1, 0.1, 10, 10, 10)
      else if (r > 1 && r <= 2)
        enemy = new wy3d_Object("enemy" + String(Math.floor(r)), m_enemy, t_enemy2, 12 + Math.random() * 20, -3 + Math.random() * 7.0, pZ, -90, 180, 0, 0.09, 0.125, 0.125, 13, 13, 13)
      else
        enemy = new wy3d_Object("enemy" + String(Math.floor(r)), m_enemy, t_enemy3, 12 + Math.random() * 20, -3 + Math.random() * 7.0, pZ, -90, 180, 0, 0.115, 0.08, 0.11, 11, 10, 11)
      enemies.push(enemy);
    }
  }
}

function generateBullets() {
  if (bullets.length < 4) {
    for (var i = 0; i < (maxBullets - bullets.length); i++) {
      var j = Math.floor(Math.random() * enemies.length);
      var enemyObj = enemies[j];
      var bullet = new wy3d_Object("enemyBullet" + String(j), m_bullet, t_enemyBullet, enemyObj.position[0] - 1.0, enemyObj.position[1], enemyObj.position[2], 0, 180, 0, 0.123, 0.123, 0.123, 10, 10, 10);
      bullets.push(bullet);
    }
  }
}

function generateBuildings() {
  for (var i = 0; i < Math.floor(5 + Math.random() * 7); i++) {
    r = Math.random() * 3;

    var building;

    if (r <= 1.5)
      building = new wy3d_Object("building" + String(i), m_building1, t_building1, 35 + groundObjectsPos[0] + Math.random() * 25, groundObjectsPos[1], -12.0 + groundObjectsPos[2] + Math.random() * 25, 90, 0, 0, 1, 1 + Math.random() * 0.2, 1);
    else
      building = new wy3d_Object("building" + String(i), m_building2, t_building2, 35 + groundObjectsPos[0] + Math.random() * 25, groundObjectsPos[1], -12.0 + groundObjectsPos[2] + Math.random() * 25, 90, 0, 0, 1, 1 + Math.random() * 0.1, 1);

    layout.push(building);
  }
}

function generateExplosion(pos) {
  var explosion = new wy3d_Object("explosion" + String(explosions.length), m_particles, t_particles, pos[0], pos[1], pos[2], Math.random() * 45, Math.random() * 45, Math.random() * 45, 0.15, 0.05, 0.05);
  explosions.push(explosion);

  var tExplosion = new Date().getTime();
  tExplosions.push(tExplosion);
}
