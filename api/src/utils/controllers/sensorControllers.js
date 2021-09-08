const Sensor = require('../../db/models/sensorModel.js')
const Event = require('../../db/models/eventModel.js')

async function createSensors (req,res,next){ 
    let { name, active, coordinates, minval, maxval} = req.body;

    const createSensor = new Sensor ({
        name,
        active,
        location:{
            coordinates,
        },
        minval,
        maxval,
    })
    await createSensor.save()
    return res.send(createSensor)
}

async function readSensors (req,res,next){ 
    let {id} = req.query;

    //checkear si trae bien los eventos
    if(id){
        let sensorFounded = await Sensor.findById(id)
        let eventsSensor = await Event.find({ sensorId: id}).exec();
        sensorFounded.events = eventsSensor

        return res.send(sensorFounded)
    }
    else{
        let sensorsFounded = await Sensor.find()
        return res.send(sensorsFounded)
    }
}

async function updateSensors (req,res,next){ 
    let { id, name, active, coordinates, minval, maxval} = req.body

    let sensorUpdated = await Sensor.findByIdAndUpdate(id,{
        name,
        active,
        location:{
            coordinates,
        },
        minval,
        maxval,
   })
   return res.send(sensorUpdated)
}

async function deleteSensors (req,res,next){ 
    let sensorDeleted = await Sensor.findByIdAndRemove(req.body.id)

    return res.send(sensorDeleted)
}


module.exports={
    createSensors,
    readSensors,
    updateSensors,
    deleteSensors
}