const Car = function() {
    let speed = v2d(0,0)
    let acc = v2d(0,0)
    let heading = 0
    let pivotPos = v2d(0,0)

    let carBox = planck.Box(20, 20);
    let body = world.createDynamicBody(v2d(0,0))
        .createFixture(carBox, 0.5);

    return {
        draw : function () {
            ct.fillStyle = 'red'
            ct.fillRect(body.getBody().getPosition().x,body.getBody().getPosition().y,20,20)
        },
        input : function () {
            if(up) {
                speed.y--
            } else if(down) {
                speed.y++
            } else if(right) {
                speed.x++
            } else if(left) {
                speed.x--
            }
            //pos.add(speed)
        }
    }
}
