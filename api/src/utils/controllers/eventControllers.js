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
    let { id } = req.query;
    let events = await Event.find({sensorId: id}).exec()
    return res.send(events)
}

async function updateEvents (req,res,next){ 
    console.log(req.body)
   let { eventId, newValue } = req.body
   let updatedEvent = await Event.findByIdAndUpdate(eventId,{
       value: newValue
   })
   return res.send(updatedEvent)
}

async function deleteEvents (req,res,next){ 
    let {eventId, sensorId} = req.body;
    if(eventId){
        let deletedEvent = await Event.deleteOne({_id:eventId})
        return res.send(deletedEvent)
    } else{
        let deletedEvents = await Event.deleteMany({sensorId:sensorId})
        return res.send(deletedEvents)
    }
}


module.exports={
    createEvents,
    readEvents,
    updateEvents,
    deleteEvents
}