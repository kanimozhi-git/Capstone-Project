const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Uploadsongs'); // Uploads will be saved in the 'uploads/songs' directory
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.post('/upload', upload.single('song'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Please upload a file' });
  }

  const fileName = req.file.filename;
  return res.status(200).json({ message: 'File uploaded successfully', fileName: fileName });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
