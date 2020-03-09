function collisionDetection() {
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if (playerPos[0] + enemy.dimensions[0] / 2 >= (enemy.position[0] - enemy.dimensions[0]) && playerPos[0] - enemy.dimensions[0] / 2 <= (enemy.position[0] + enemy.dimensions[0]))
            if (playerPos[1] + enemy.dimensions[1] / 3 >= (enemy.position[1] - enemy.dimensions[1] / 3) && playerPos[1] - enemy.dimensions[1] / 3 <= (enemy.position[1] + enemy.dimensions[1] / 3)) {
                generateExplosion(playerPos);
                generateExplosion(playerPos);
                generateExplosion(playerPos);
                generateExplosion(enemy.position);
                enemies = delObj(enemies, i);
                playerDown = true;
            }
    }

    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];
        if (playerPos[0] + enemy.dimensions[0] / 2 >= (bullet.position[0] - bullet.dimensions[0] / 2) && playerPos[0] - enemy.dimensions[0] / 2 <= (bullet.position[0] + bullet.dimensions[0] / 2))
            if (playerPos[1] + enemy.dimensions[1] / 2 >= (bullet.position[1] - bullet.dimensions[1] / 2) && playerPos[1] - enemy.dimensions[1] / 2 <= (bullet.position[1] + bullet.dimensions[1] / 2)) {
                generateExplosion(playerPos);
                generateExplosion(playerPos);
                generateExplosion(playerPos);
                bullets = delObj(bullets, i);
                playerDown = true;
            }
    }

    for (var i = 0; i < pBullets.length; i++) {
        var pbullet = pBullets[i];
        for (var j = 0; j < enemies.length; j++) {
            var enemy = enemies[j];
            if (pbullet.position[0] + pbullet.dimensions[0] / 2 >= (enemy.position[0] - enemy.dimensions[0] / 2) && pbullet.position[0] - pbullet.dimensions[0] / 2 <= (enemy.position[0] + enemy.dimensions[0] / 2))
                if (pbullet.position[1] + pbullet.dimensions[1] / 2 >= (enemy.position[1] - enemy.dimensions[1] / 2) && pbullet.position[1] - pbullet.dimensions[1] / 2 <= (enemy.position[1] + enemy.dimensions[1] / 2)) {
                    generateExplosion(enemy.position);
                    enemies = delObj(enemies, j);
                    pBullets = delObj(pBullets, i);
                }
        }
    }
}
