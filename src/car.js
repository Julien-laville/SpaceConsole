const Car = function() {
    let speed = v2d(0,0)
    let acc = v2d(0,0)
    let heading = 0
    let pivotPos = v2d(0,0)

    const MAX_FORCE = 1


    let carBox = planck.Box(20, 20);
    let carFixture = world.createDynamicBody(v2d(20,20))
        .createFixture(carBox)
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
            force =  0;
            if(up) {
                document.title = 1
                force = 1
                body.applyForce(v2d(0,force), body.getWorldCenter())
            } else if(down) {
                body.applyForce(v2d(0,force), body.getWorldCenter())

                document.title = '-1'
                force = -1
            } else {
                document.title = 'ha'
            }

        },
        r : function () {
            return body;
        }
    }
}
