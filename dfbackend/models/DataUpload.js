const mongoose = require('mongoose');

const dataUploadSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  categoryid: String,
  // Add more fields as needed
});

const DataUpload = mongoose.model('DataUpload', dataUploadSchema);

module.exports = DataUpload;
