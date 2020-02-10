var wy = null;

function start() {
    var canvas = document.getElementById("canvas");
    resx = window.innerWidth * 0.85;
    resy = window.innerHeight * 0.85;
    canvas.width = resx;
    canvas.height = resy;

    wy = new Wineyard3D(canvas, resx, resy, 1);
    loadResources(wy);

    scene = wy.addScene("level1");
    scene.setBackgroundTexture(t_bckg1);

    wy.renderScene(scene, gameFunction);
}

function gameFunction() {
    scene.addBackgroundScroll(speedX / 10, 0.0);
    scroll_pos += speedX;

    progress = Math.floor(scroll_pos / 2);
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

    scene.OBJECTS = [];
    for (var i = 0; i < layout.length; i++)
        scene.addObject(layout[i]);

    for (var i = 0; i < enemies.length; i++)
        scene.addObject(enemies[i]);

    for (var i = 0; i < bullets.length; i++)
        scene.addObject(bullets[i]);

    for (var i = 0; i < pBullets.length; i++)
        scene.addObject(pBullets[i]);

    for (var i = 0; i < explosions.length; i++)
        scene.addObject(explosions[i]);

    scene.addObject("Player", m_player, t_player, playerPos[0], playerPos[1], playerPos[2], playerRotX, playerRotY, playerRotZ, 0.1, 0.1, 0.1);

    collisionDetection();
}

function moveWorld() {
    var planet1 = scene.getObject("planetObj1");
    if (planet1 != null)
        planet1.addRotation(0, 0.2, 0);

    var planet2 = scene.getObject("planetObj2");
    if (planet2 != null)
        planet2.addRotation(0, 0.1, 0);

    var planet3 = scene.getObject("planetObj3");
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
        explosions[i].addLightning(0.05, 0.05, 0.05);
        explosions[i].addScale(0.05, 0.05, 0.05);
        explosions[i].addOpacity(-0.015);
    }

}

function moveCamera() {
    var cy = -playerPos[1] / 2;
    if (cy > 1.0)
        cy = 1.0
    if (cy < -1.0)
        cy = -1.0

    scene.camPos = [0, cy, 0];
}

function delObj(arr, i) {
    var newArr = arr;
    newArr.splice(i, 1);
    return newArr;
}
