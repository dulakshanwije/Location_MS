const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  s_no: {
    type: "String",
    require: true,
    uniqe: true,
  },
  device_type: {
    type: "String",
    require: true,
  },
  is_active: {
    type: Boolean,
  },
  image: {
    type: "String",
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

const LocationSchema = new Schema({
  name: {
    type: "String",
    require: true,
  },
  address: {
    type: "String",
  },
  phone: {
    type: "String",
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  devices: [DeviceSchema],
});

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
