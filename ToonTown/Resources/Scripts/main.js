// This script is the main entry point of the game
//Load scene
if(Atomic.platform == "Android" || Atomic.platform == "iOS") {
  Atomic.renderer.reuseShadowMaps = false;
  Atomic.renderer.shadowQuality = Atomic.SHADOWQUALITY_LOW_16BIT;
}

Atomic.player.loadScene("Scenes/ToonTown.scene");
