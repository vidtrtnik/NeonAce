var m_cube;
var m_player;
var m_enemy;
var m_bullet;
var m_ground;
var m_building1;
var m_building2;
var m_planet;
var m_particles;
var m_tree1;

var t_cube;
var t_player;
var t_enemy1;
var t_enemy2;
var t_enemy3;
var t_playerBullet;
var t_enemyBullet;
var t_ground;
var t_building1;
var t_building2;
var t_planet1;
var t_planet2;
var t_planet3;
var t_particles;
var t_tree1;

var t_neonacelogo;
var t_neonacelogo2;
var t_wy3dlogo;
var t_bckg1;
var t_bckg2;
var t_choiceStart;
var t_choiceGithub;

function loadResources(wy) {
  m_cube = new wy3d_Model(wy, "./models/cube.wy3dm");
  m_player = new wy3d_Model(wy, "./models/player.wy3dm");
  m_enemy = new wy3d_Model(wy, "./models/enemy.wy3dm");
  m_bullet = new wy3d_Model(wy, "./models/bullet.wy3dm");
  m_ground = new wy3d_Model(wy, "./models/ground.wy3dm");
  m_building1 = new wy3d_Model(wy, "./models/building1.wy3dm");
  m_building2 = new wy3d_Model(wy, "./models/building2.wy3dm");
  m_planet = new wy3d_Model(wy, "./models/planet.wy3dm");
  m_particles = new wy3d_Model(wy, "./models/particles.wy3dm");
  m_tree1 = new wy3d_Model(wy, "./models/tree1.wy3dm");

  t_cube = new wy3d_Texture(wy, "./textures/cube.wy3dt");
  t_player = new wy3d_Texture(wy, "./textures/player.wy3dt");
  t_enemy1 = new wy3d_Texture(wy, "./textures/enemy1.wy3dt");
  t_enemy2 = new wy3d_Texture(wy, "./textures/enemy2.wy3dt");
  t_enemy3 = new wy3d_Texture(wy, "./textures/enemy3.wy3dt");
  t_playerBullet = new wy3d_Texture(wy, "./textures/playerBullet.wy3dt");
  t_enemyBullet = new wy3d_Texture(wy, "./textures/enemyBullet.wy3dt");
  t_ground = new wy3d_Texture(wy, "./textures/ground.wy3dt");
  t_building1 = new wy3d_Texture(wy, "./textures/building1.wy3dt");
  t_building2 = new wy3d_Texture(wy, "./textures/building2.wy3dt");
  t_building3 = new wy3d_Texture(wy, "./textures/building3.wy3dt");
  t_building4 = new wy3d_Texture(wy, "./textures/building4.wy3dt");
  t_planet1 = new wy3d_Texture(wy, "./textures/planet1.wy3dt");
  t_planet2 = new wy3d_Texture(wy, "./textures/planet2.wy3dt");
  t_planet3 = new wy3d_Texture(wy, "./textures/planet3.wy3dt");
  t_particles = new wy3d_Texture(wy, "./textures/particles.wy3dt");
  t_tree1 = new wy3d_Texture(wy, "./textures/tree1.wy3dt");

  t_wy3dlogo = new wy3d_Texture(wy, "./textures/wineyard3d_logo.wy3dt");
  t_neonacelogo = new wy3d_Texture(wy, "./textures/neonace_logo.wy3dt");
  t_neonacelogo2 = new wy3d_Texture(wy, "./textures/neonace_logo2.wy3dt");
  t_bckg1 = new wy3d_Texture(wy, "./textures/background.wy3dt");
  t_bckg2 = new wy3d_Texture(wy, "./textures/background2.wy3dt");
  t_choiceStart = new wy3d_Texture(wy, "./textures/choiceStart.wy3dt");
  t_choiceGithub = new wy3d_Texture(wy, "./textures/choiceGithub.wy3dt");
}
