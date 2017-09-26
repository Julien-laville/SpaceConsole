function in_air() {
    const ac = new AirConsole()
    let fc = 0

    ac.onMessage = (from, data) => {
        info.innerHTML = `${from} ${data}`
    }

    ac.onConnect = (devid) => {
        ac.setActivePlayers(1)
        if(gstatus === 0) {
            gstatus = -1
            loop()
        }
    }

    ac.onDisconnect = (devid) => {
        cancelAnimationFrame(handle)
        info.innerHTML = 'Nobody to play with'
        debug.innerHTML = ''
        gstatus = 0
    }
}
