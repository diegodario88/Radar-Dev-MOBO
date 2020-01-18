import socketio from 'socket.io-client'

const socket = socketio('https://omnistack-265203.appspot.com', {
    autoConnect: false
})

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }

    socket.connect()
}

function disconnect() {

    if (socket.connected) {

        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}
