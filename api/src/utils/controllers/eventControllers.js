const Event = require('../../db/models/eventModel.js');
const Sensor = require('../../db/models/sensorModel.js')

function createEvents (req,res,next){ 
   let { sensorId, value} = req.body;

   Sensor.findById(sensorId)
   .then(sensorFound=>{
       if( value >= sensorFound.minval && value <= sensorFound.maxval ){
           const createEvent = new Event ( { sensorId, value} )
           return createEvent.save()
       }
       else{
           throw new RangeError("Value out of range")
       }
    })
    .then((createdEvent)=> res.send(createdEvent))
    .catch(e=>next(e))
}

function readEvents (req,res,next){ 
    let { id } = req.query;

    Event.find({sensorId: id}).exec()
    .then((events)=>res.send(events))
    .catch(e=>next(e))
}

function updateEvents (req,res,next){ 
   let { sensorId, eventId, newValue } = req.body;

   Sensor.findById(sensorId)
   .then(sensorFound=>{
       if( newValue >= sensorFound.minval && newValue <= sensorFound.maxval ){
            return Event.findByIdAndUpdate(eventId,{ value: newValue })
       }
       else{
           throw new RangeError("Value out of range")
       }
    })
    .then((updatedEvent)=> res.send(updatedEvent))
    .catch(e=>next(e))
}

async function deleteEvents (req,res,next){ 
    let {eventId, sensorId} = req.body;

    if(eventId){
        Event.deleteOne({_id:eventId})
        .then( (deletedEvent) => res.send(deletedEvent))
        .catch(e=>next(e))
    } else{
        Event.deleteMany({ sensorId: sensorId })
        .then( (deletedEvents) => res.send(deletedEvents))
        .catch(e=>next(e))
    }
}


module.exports={
    createEvents,
    readEvents,
    updateEvents,
    deleteEvents
}