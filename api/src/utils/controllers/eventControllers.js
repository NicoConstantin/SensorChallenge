const Sensor = require('../../db/models/sensorModel.js')
const Event = require('../../db/models/eventModel.js')

async function createEvents (req,res,next){ 
   let { sensorId, value} = req.body
   const createEvent = new Event ({
    sensorId,
    value,
    })
    await createEvent.save()
    return res.send(createEvent)
}

async function readEvents (req,res,next){ 
    let { sensorId} = req.query;
    let events = await Event.find({sensorId: sensorId}).exec()
    return res.send(events)
}

async function updateEvents (req,res,next){ 
   let { eventId, newValue } = req.body
   let updatedEvent = await Event.findByIdAndUpdate(eventId,{
       value: newValue
   })
   return res.send(updatedEvent)
}

async function deleteEvents (req,res,next){ 
   let deletedEvent = await Event.findByIdAndDelete(req.body.eventId)
   return res.send(deletedEvent)
}


module.exports={
    createEvents,
    readEvents,
    updateEvents,
    deleteEvents
}