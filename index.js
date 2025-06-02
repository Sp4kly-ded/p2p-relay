const { WebSocketServer } = require('ws')
const DHT = require('hyperdht')
const { relay } = require('@hyperswarm/dht-relay')
const Stream = require('@hyperswarm/dht-relay/ws')

const port = 'wss://p2p-relay-production.up.railway.app'
const dht = new DHT()
const server = new WebSocketServer({ port })

console.log(`Relay running on port ${port}`)

server.on('connection', (socket) => {
  const stream = new Stream(false, socket)
  relay(dht, stream)
})

module.exports = { port }
