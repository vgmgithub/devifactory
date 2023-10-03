const mongoose = require('mongoose');

const dataUploadSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  categoryName: String,
  // Add more fields as needed
});

const DataUpload = mongoose.model('DataUpload', dataUploadSchema);

module.exports = DataUpload;
