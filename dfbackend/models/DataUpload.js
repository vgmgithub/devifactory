const mongoose = require('mongoose');

const dataUploadSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  title: String,
  client: Number,
  categoryid: mongoose.Schema.Types.ObjectId,
  // Add more fields as needed
});

const DataUpload = mongoose.model('DataUpload', dataUploadSchema);

module.exports = DataUpload;
