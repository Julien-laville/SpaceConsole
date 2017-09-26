function in_input() {
    onkeydown = function(e) {
        if(e.keyCode === 87 || e.keyCode === 90)
            up = 1
        if(e.keyCode === 65 || e.keyCode === 81)
            left = 1
        if(e.keyCode === 83) 
            down = 1
        if(e.keyCode === 68)
            right = 1
    }
    onkeyup = function(e) {
        if(e.keyCode === 87 || e.keyCode === 90)
            up = 0
        if(e.keyCode === 65 || e.keyCode === 81)
            left = 0
        if(e.keyCode === 83) 
            down = 0
        if(e.keyCode === 68)
            right = 0
    }
}
