const Car = function() {
    let speed = v2d(0,0)
    let acc = v2d(0,0)
    let heading = 0
    let pivotPos = v2d(0,0)

    const MAX_FORCE = 1


    let carBox = planck.Box(20, 20);
    let carFixture = world.createDynamicBody(v2d(20,20))
        .createFixture(carBox, 1);
    let body = carFixture.getBody()
    let pos = body.getPosition()
    let force
    let torque = 0

    return {
        draw : function () {
            ct.fillStyle = 'red'
            ct.fillRect(pos.x,pos.y,20,20)
        },
        input : function () {
            force =  1;
            if(up) {
                force = 1
            } else if(down) {
                force = -1
            }
            body.applyForce(v2d(0,0.01).mul(1), body.getPosition())
        },
        r : function () {
            return body;
        }
    }
}
