const NATS = require('nats')

const host = process.env.LFH_NATS_SUBSCRIBER_HOST || 'nats-server'
const port = process.env.LFH_NATS_SUBSCRIBER_PORT || '4222'
const topic = process.env.LFH_NATS_SUBSCRIBER_TOPIC || 'lfh-events'

const nc = NATS.connect(host+':'+port)
console.log('Listening for messages from '+host+':'+port+' on topic: '+topic)

nc.subscribe(topic, function (msg) {
  console.log('Received a message: ' + msg)

  // Parse the JSON message
  try {
    let jsonMsg = JSON.parse(msg)
    if (jsonMsg && jsonMsg.data) {
      let data = jsonMsg.data
      console.log('Received data: ' + JSON.stringify(data))
      if (data.resourceType && data.id) {
        console.log('Data contains a resource with type: '+data.resourceType+" and id: "+data.id)
      }
    }
  } catch (ex) {
    console.log('Message does not contain valid json: '+ex)
  } 
})
