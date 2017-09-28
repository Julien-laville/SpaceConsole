function Update_screen() {
    world.step(delta / 1000);
    // planck
    for (var body = world.getBodyList(); body; body = body.getNext()) {
        for (var fixture = body.getFixtureList(); fixture; fixture = fixture.getNext()) {
          // draw or update fixture 
        }
      }
}


function in_frame() {
    
}
var v2d = planck.Vec2;
function in_game() {
    //map
    world = planck.World()
    var route = world.createBody()
    var routeProp = {density : 0.0, friction : 0.6}
    route.createFixture(planck.Edge(new v2d(0,100), new v2d(100,100)), routeProp)
    
    //cars
    carBox = planck.Box(1, 1);
    car = world.createDynamicBody(v2d(230.0, 2.5))
        .createFixture(carBox, 0.5);
    
    }


function in_frame() {
    
}