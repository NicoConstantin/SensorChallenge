const Sensor = require('../../db/models/sensorModel')

async function createSensors (req,res,next){ 
    const createdSensor = new Sensor ({
        name:"SensorTK-24",
        location:{
            coordinates:[24,42]
        },
        minval: 1582,
        maxval: 2858
    })
    await createdSensor.save()
    res.send(createdSensor)
}

function readSensors (req,res,next){ 
    
}

function updateSensors (req,res,next){ 
   
}

function deleteSensors (req,res,next){ 
   
}


module.exports={
    createSensors,
    readSensors,
    updateSensors,
    deleteSensors
}