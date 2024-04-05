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
  location_id: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

const Device = mongoose.model("Device", DeviceSchema);
module.exports = Device;