function Update_screen() {
    world.step(16);
    // planck
    for (let body = world.getBodyList(); body; body = body.getNext()) {
        for (let fixture = body.getFixtureList(); fixture; fixture = fixture.getNext()) {
          // draw or update fixture 
        }
      }
    car.draw()
}


const v2d = planck.Vec2;

function in_frame() {
    car.input()
}

function in_game() {
    //map
    world = planck.World()


    //cars

    car = new Car()
    
    }
