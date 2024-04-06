const Location = require("../models/location.model");
const fs = require("fs");

const addLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, image: req.file.filename };
    const location = await Location.findByIdAndUpdate(id, {
      $push: { devices: data },
    });
    if (!location) {
      res.status(404).json("Location Not Found!");
    }
    const updatedLocation = await Location.findById(id);
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDeviceById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location.devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDeviceCountById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    const devices_count = location.devices.length;
    res.status(200).json(devices_count);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDevice = async (req, res) => {
  try {
    const { location_id, device_id } = req.params;
    const location = await Location.findById(location_id);
    if (!location) {
      res.status(404).json({ message: "Location not found!!!" });
    }
    if (location.devices.id(device_id) != null) {
      const status = location.devices.id(device_id).is_active;
      location.devices.id(device_id).is_active = !status;
      location.markModified("devices");
      await location.save();
      res.status(200).json({ message: "Updateed Successfully" });
    } else {
      res.status(404).json({ message: "Device not found!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDevice = async (req, res) => {
  try {
    const { location_id, device_id } = req.params;
    const location = await Location.findById(location_id);
    if (!location) {
      res.status(404).json({ message: "Location not found!!!" });
    }
    if (location.devices.id(device_id) != null) {
      fs.unlink(
        `public/uploads/${location.devices.id(device_id).image}`,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      await location.devices.id(device_id).deleteOne();
      await location.save();
      res.status(200).json({ message: "Removed Successfully" });
    } else {
      res.status(404).json({ message: "Device not found!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  getDeviceById,
  getDeviceCountById,
  updateDevice,
  deleteDevice,
  addLocation,
  addDevice,
};
