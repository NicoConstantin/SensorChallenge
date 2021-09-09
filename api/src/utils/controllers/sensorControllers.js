const Sensor = require('../../db/models/sensorModel.js');

function createSensors (req,res,next){ 
    let { name, active, coordinates, minval, maxval} = req.body;

    const createSensor = new Sensor ({
        name,
        active,
        location:{
            coordinates,
        },
        minval,
        maxval,
    });

    createSensor.save()
    .then(()=> res.send(createSensor))
    .catch(e=> next(e))
};

async function readSensors (req,res,next){ 
    let {id} = req.query;

    if(id){
        Sensor.findById(id)
        .then((sensorFounded)=>{
            return res.send(sensorFounded)
        })
        .catch(e=>next(e))
    }
    else{
        Sensor.find()
        .then(sensorsFounded=>res.send(sensorsFounded))
        .catch(e=>next(e))
    }
};

function updateSensors (req,res,next){ 
    let { id, name, statussend, status, coordinates, minval, maxval} = req.body;

    Sensor.findById(id)
    .then((sensorToUpdate)=>{
        if(name){
            sensorToUpdate.name = name
        }
        if(statussend){
            sensorToUpdate.active = status
        }
        if(coordinates){
            sensorToUpdate.location.coordinates = coordinates
        }
        if(minval){
            sensorToUpdate.minval = minval
        }
        if(maxval){
            sensorToUpdate.maxval = maxval
        }
        return sensorToUpdate.save()
    })
    .then( sensorUpdated=> res.send(sensorUpdated))
    .catch(e=>next(e))
}

function deleteSensors (req,res,next){ 
    Sensor.deleteOne({_id: req.body.id})
    .then(sensorDeleted=>res.send(sensorDeleted))
    .catch(e=>next(e))
}


module.exports={
    createSensors,
    readSensors,
    updateSensors,
    deleteSensors
}