const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    sensorId: {
        type:mongoose.ObjectId,
        required:true
    },
    value: {
        type:Number,
        required:true
    },
  },{
    timestamps: true
  });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event