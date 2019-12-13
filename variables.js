var Z = -30.0;
var pZ = -15.0;

var maxX = 9.0;
var minX = -9.0;
var maxY = 5.0;
var minY = -4.0;

var camRotX = 0.0;
var camRotY = 0.0;

var playerSpeed = 0.123;
var playerRotX = 90.0;
var playerRotY = 0.0;
var playerRotZ = 0.0;
var playerPos = [-5.0, 0.0, pZ];

var groundPos = [5.0, -25.0, -25.0];
var groundObjectsPos = [0.0, -3.0, Z];
var monumentDrawn = false;

var level1_map = [
3, 0, 2, 0, 0, 1, 0, 0, 0, 0,
1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

var wy = null;

var prev_progress = -1;
var progress = 0.0;
var scroll_pos = 0.0;

var speedX = 0.0055;

var time;
var shootTime = 0.0;

var maxBullets = 4;
var maxEnemies = 6;

var layout = []
var enemies = []
var bullets = []
var pBullets = []
var explosions = []
var tExplosions = []
