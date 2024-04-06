const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const Location = require("./models/location.model");

// JSON middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public/"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server Connected");
});

// Database connection
mongoose
  .connect(
    "mongodb+srv://dulakshanwije:uIdIeC4TyjFHeDF2@devicesms.g7sfmhi.mongodb.net/locations_devices"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Failed to connect database");
  });

// Routes
// Add location
app.post("/api/add_location", async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/////////////////////////////////////////////////////////////////////
const multer = require("multer");
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
// Add device
app.post("/api/add_device/:id", upload.single("image"), async (req, res) => {
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
});

// Get All Locations
app.get("/api/get_locations", async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Location by ID
app.get("/api/get_location/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Devices by Location ID
app.get("/api/get_devices/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location.devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Number of Devices by Location ID
app.get("/api/get_devices_count/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    const devices_count = location.devices.length;
    res.status(200).json(devices_count);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //Update device by Device ID
app.put("/api/update_device/:location_id/:device_id", async (req, res) => {
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
});

// Delete device by Device ID
app.delete("/api/delete_device/:location_id/:device_id", async (req, res) => {
  try {
    const { location_id, device_id } = req.params;
    const location = await Location.findById(location_id);
    if (!location) {
      res.status(404).json({ message: "Location not found!!!" });
    }
    if (location.devices.id(device_id) != null) {
      await location.devices.id(device_id).deleteOne();
      await location.save();
      res.status(200).json({ message: "Removed Successfully" });
    } else {
      res.status(404).json({ message: "Device not found!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//
