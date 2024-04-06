const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const {
  getAllLocations,
  getLocationById,
  getDeviceById,
  getDeviceCountById,
  updateDevice,
  deleteDevice,
  addLocation,
  addDevice,
} = require("../controllers/api.controller");

//Multer middleware
/////////////////////////////////////////////////////////////////////
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "image" + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
////////////////////////////////////////////////////////

// Routes
// Add location
router.post("/add_location", addLocation);
// Add device
router.post("/add_device/:id", upload.single("image"), addDevice);

// Get All Locations
router.get("/get_locations", getAllLocations);

// Get Location by ID
router.get("/get_location/:id", getLocationById);

// Get Devices by Location ID
router.get("/get_devices/:id", getDeviceById);

// Get Number of Devices by Location ID
router.get("/get_devices_count/:id", getDeviceCountById);

// //Update device by Device ID
router.put("/update_device/:location_id/:device_id", updateDevice);

// Delete device by Device ID
router.delete("/delete_device/:location_id/:device_id", deleteDevice);

module.exports = router;
