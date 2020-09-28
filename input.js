function playerInput() {
  if (mouseEnabled == true)
  {
    var mx = wy.input.MOUSE_COORDS_CANVAS[0];
    var my = wy.input.MOUSE_COORDS_CANVAS[1];

    var mvx = (mx - wy.canvas_bcr.width/2) / 2500;
    var mvy = (my - wy.canvas_bcr.height/2) / 2500;


    if (mvx > 0.01) {
      if (playerPos[0] < maxX)
      playerPos[0] += mvx;
    }

    if (mvx < -0.01) {
      if (playerPos[0] > minX)
      playerPos[0] += mvx;
    }

    if (mvy > 0.01) {
      if (playerPos[1] > minY)
        playerPos[1] -= mvy;

      if (playerRotX > 60)
        playerRotX -= 3;
    }

    if (mvy < -0.01) {
      if (playerPos[1] < maxY)
        playerPos[1] -= mvy;

      if (playerRotX < 120)
        playerRotX += 3;
    }
  }

  if (wy.input.get("up")) {
    if (playerPos[1] < maxY)
      playerPos[1] += playerSpeed;

    if (playerRotX > 60)
      playerRotX -= 3;
  } else if (wy.input.get("down")) {
    if (playerPos[1] > minY)
      playerPos[1] -= playerSpeed;

    if (playerRotX < 120)
      playerRotX += 3;
  }

  if (wy.input.get("left")) {
    if (playerPos[0] > minX) {
      playerPos[0] -= playerSpeed / 1.1;
    }
  } else if (wy.input.get("right")) {
    if (playerPos[0] < maxX)
      playerPos[0] += playerSpeed;
  }

  if (!wy.input.get("down") && !wy.input.get("up")) {
    if (playerRotX < 90)
      playerRotX += 3;

    if (playerRotX > 90)
      playerRotX -= 3;
  }

  if (wy.input.isDown("space") || wy.input.MOUSE_CLICK) {
    wy.input.MOUSE_CLICK = false;
    var now = new Date().getTime();
    if (now - shootTime >= 1000.0) {
      shootTime = new Date().getTime();
      var pBullet = new wy3d_Object("playerBullet", m_bullet, t_playerBullet, playerPos[0] + 1, playerPos[1], playerPos[2], 0, 0, 0, 0.123, 0.123, 0.123);
      pBullets.push(pBullet);
    }
  }

  if (wy.input.isDown("P")) {
    mouseEnabled = !mouseEnabled;
    document.getElementById("overlay_mouse").innerHTML = mouseEnabled | 0;
  }

}
