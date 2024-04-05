const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
