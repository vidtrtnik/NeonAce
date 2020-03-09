var res_m_cube;
var res_m_player;
var res_m_enemy;
var res_m_bullet;
var res_m_ground;
var res_m_building1;
var res_m_building2;
var res_m_planet;
var res_m_particles;

var res_t_cube;
var res_t_player;
var res_t_enemy1;
var res_t_enemy2;
var res_t_enemy3;
var res_t_playerBullet;
var res_t_enemyBullet;
var res_t_ground;
var res_t_building1;
var res_t_building2;
var res_t_planet1;
var res_t_planet2;
var res_t_planet3;
var res_t_particles;

var res_t_logo;
var res_t_bckg1;
var res_t_bckg2;

var res_t_choiceStart;
var res_t_choiceGithub;

var m_cube;
var m_player;
var m_enemy;
var m_bullet;
var m_ground;
var m_building1;
var m_building2;
var m_planet;
var m_particles;

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

var t_neonacelogo;
var t_wy3dlogo;
var t_bckg1;
var t_bckg2;
var t_choiceStart;
var t_choiceGithub;

function loadResources(wy) {
    res_m_cube = wy.addResource("res_m_cube", "./models/cube.wy3dm");
    res_m_player = wy.addResource("res_m_player", "./models/player.wy3dm");
    res_m_enemy = wy.addResource("res_m_enemy", "./models/enemy.wy3dm");
    res_m_bullet = wy.addResource("res_m_bullet", "./models/bullet.wy3dm");
    res_m_ground = wy.addResource("res_m_ground", "./models/ground.wy3dm");
    res_m_building1 = wy.addResource("res_m_building1", "./models/building1.wy3dm");
    res_m_building2 = wy.addResource("res_m_building2", "./models/building2.wy3dm");
    res_m_planet = wy.addResource("res_m_planet", "./models/planet.wy3dm");
    res_m_particles = wy.addResource("res_m_particles", "./models/particles.wy3dm");

    res_t_cube = wy.addResource("res_t_cube", "./textures/cube.wy3dt");
    res_t_player = wy.addResource("res_t_player", "./textures/player.wy3dt");
    res_t_enemy1 = wy.addResource("res_t_enemy1", "./textures/enemy1.wy3dt");
    res_t_enemy2 = wy.addResource("res_t_enemy2", "./textures/enemy2.wy3dt");
    res_t_enemy3 = wy.addResource("res_t_enemy3", "./textures/enemy3.wy3dt");
    res_t_playerBullet = wy.addResource("res_t_playerBullet", "./textures/playerBullet.wy3dt");
    res_t_enemyBullet = wy.addResource("res_t_enemyBullet", "./textures/enemyBullet.wy3dt");
    res_t_ground = wy.addResource("res_t_ground", "./textures/ground.wy3dt");
    res_t_building1 = wy.addResource("res_t_building1", "./textures/building1.wy3dt");
    res_t_building2 = wy.addResource("res_t_building2", "./textures/building2.wy3dt");
    res_t_planet1 = wy.addResource("res_t_planet1", "./textures/planet1.wy3dt");
    res_t_planet2 = wy.addResource("res_t_planet2", "./textures/planet2.wy3dt");
    res_t_planet3 = wy.addResource("res_t_planet3", "./textures/planet3.wy3dt");
    res_t_particles = wy.addResource("res_t_particles", "./textures/particles.wy3dt");

    res_t_wy3dlogo = wy.addResource("res_t_logo", "./textures/wineyard3d_logo.wy3dt");
    res_t_neonacelogo = wy.addResource("res_t_logo", "./textures/neonace_logo.wy3dt");
    res_t_bckg1 = wy.addResource("res_t_bckg1", "./textures/background.wy3dt");
    res_t_bckg2 = wy.addResource("res_t_bckg2", "./textures/background2.wy3dt");
    
    res_t_choiceStart = wy.addResource("res_t_choiceStart", "./textures/choiceStart.wy3dt");
    res_t_choiceGithub = wy.addResource("res_t_choiceGithub", "./textures/choiceGithub.wy3dt");

    m_cube = new wy3d_Model(res_m_cube);
    m_player = new wy3d_Model(res_m_player);
    m_enemy = new wy3d_Model(res_m_enemy);
    m_bullet = new wy3d_Model(res_m_bullet);
    m_ground = new wy3d_Model(res_m_ground);
    m_building1 = new wy3d_Model(res_m_building1);
    m_building2 = new wy3d_Model(res_m_building2);
    m_planet = new wy3d_Model(res_m_planet);
    m_particles = new wy3d_Model(res_m_particles);

    t_cube = new wy3d_Texture(res_t_cube);
    t_player = new wy3d_Texture(res_t_player);
    t_enemy1 = new wy3d_Texture(res_t_enemy1);
    t_enemy2 = new wy3d_Texture(res_t_enemy2);
    t_enemy3 = new wy3d_Texture(res_t_enemy3);
    t_playerBullet = new wy3d_Texture(res_t_playerBullet);
    t_enemyBullet = new wy3d_Texture(res_t_enemyBullet);
    t_ground = new wy3d_Texture(res_t_ground);
    t_building1 = new wy3d_Texture(res_t_building1);
    t_building2 = new wy3d_Texture(res_t_building2);
    t_planet1 = new wy3d_Texture(res_t_planet1);
    t_planet2 = new wy3d_Texture(res_t_planet2);
    t_planet3 = new wy3d_Texture(res_t_planet3);
    t_particles = new wy3d_Texture(res_t_particles);

    t_wy3dlogo = new wy3d_Texture(res_t_wy3dlogo);
    t_neonacelogo = new wy3d_Texture(res_t_neonacelogo);
    t_bckg1 = new wy3d_Texture(res_t_bckg1);
    t_bckg2 = new wy3d_Texture(res_t_bckg2);
    t_choiceStart = new wy3d_Texture(res_t_choiceStart);
    t_choiceGithub = new wy3d_Texture(res_t_choiceGithub);
}
