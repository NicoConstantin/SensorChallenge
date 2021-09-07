const mongoose = require('mongoose')

const geoSchema = new mongoose.Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type: [Number],
        index:"2dsphere"
    }
});

const sensorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,'Name field is requiered']
    },
    location: geoSchema,
    active: {
        type: Boolean,
        required:true
    },
    minval: {
        type:Number,
        required:true
    },
    maxval: {
        type:Number,
        required:true
    },
  });

const Sensor = mongoose.model('Sensor', sensorSchema);

module.export = Sensor