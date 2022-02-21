const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const multer = require("multer"),

uploader = multer({
  dest: "../uploads"
});

router.post("/", uploader.single("singleFile"), uploadController.s3); 

module.exports = router;
