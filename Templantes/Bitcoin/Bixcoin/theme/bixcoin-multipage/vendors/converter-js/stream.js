/* stream.js 

  WebSocket feed connection and event dispatcher.

*/

// Feed URL
var URL = 'wss://index.bitcoin.com/ws'

function Stream() {
  // Registered handlers
  this.callbacks = {}
  // Last dispatch message
  this.last = {}
  // Known subscriptions
  this.subscriptions = {}
  // WebSocket connection
  this.socket = null
}

Stream.prototype.register = function(item, cb) {
  if(!this.callbacks.hasOwnProperty(item))
    this.callbacks[item] = []
  if(typeof cb === 'function') {
    // Store callback function as handler for 'item'
    this.callbacks[item].push(cb)
    // If an 'item' was dispatched previously, trigger immediately
    if(this.last[item]) {
      try {
        cb(this.last[item])
      } catch(e) {}
    }
  }
}

Stream.prototype.subscribe = function(channel) {
  // Avoid double-subscribe
  if(this.subscriptions[channel])
    return
  this.doSubscribe(channel)
  this.subscriptions[channel] = (new Date()).getTime()
}

Stream.prototype.doSubscribe = function(channel) {
  try {
    this.socket.send(this.subscribeMessage(channel))
  } catch(e) {}
}

Stream.prototype.subscribeMessage = function(channel) {
  return JSON.stringify({
    op: 'subscribe',
    channel: channel
  })
}

Stream.prototype.dispatch = function(item, data) {
  // Store this as the last dispatch for 'item'
  this.last[item] = data
  // Check if there are any callbacks registered for 'item'
  if(!this.callbacks.hasOwnProperty(item))
    return
  // Trigger all handlers
  for(var i=0; i<this.callbacks[item].length; i++) {
    try {
      this.callbacks[item][i](data)
    } catch(e) {}
  }
}

Stream.prototype.connect = function() {
  if(this.socket !== null)
    return
  try {
    this.socket = new WebSocket(URL)

    this.socket.onopen = this.onOpen.bind(this)
    this.socket.onclose = this.onClose.bind(this)
    this.socket.onmessage = this.onMessage.bind(this)
  } catch(e) {}
}

Stream.prototype.reconnect = function() {
  try {
    if(this.socket.readyState != WebSocket.CLOSED)
      this.socket.close()
  } catch(e) {}
  this.socket = null
  // Initiate new connection in 15-30 seconds
  window.setTimeout(this.connect.bind(this), (15 + 15*Math.random())*1000)
}

Stream.prototype.onOpen = function() {
  // If we have subscriptions already, send those to the server
  for(var chan in this.subscriptions) {
    if(!this.subscriptions[chan])
      continue
    this.doSubscribe(chan)
  }
}

Stream.prototype.onClose = function() {
  this.reconnect()
}

Stream.prototype.onMessage = function(event) {
  try {
    var obj = JSON.parse(event.data)
    /* Expect obj to have form 
      {
        op: 'op-type',
        data: <some data>
      } 
    */
    if(obj.hasOwnProperty('op') && obj.hasOwnProperty('data')) {
      this.dispatch(obj.op, obj.data)
    }
  } catch(e) {}
}

// Start up and check for global object
var globalName = 'BitcoinComStream'

if(!(globalName in window && window.hasOwnProperty(globalName))) {
  window[globalName] = new Stream()
}

function register(item, cb) {
  window[globalName].register(item, cb)
  // On the first call to register, we connect. No wasted connection if 
  // no handlers registered
  window[globalName].connect()
}

function subscribe(channel) {
  window[globalName].subscribe(channel)
}
