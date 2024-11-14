const multer = require("multer");
const FILE_SIZE = 1e6 * 8

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    console.log("FILE ::: ", file)
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(null, uniquePrefix + "-" + file.originalname)
  },
})

module.exports = multer({ storage, limits: { fileSize: FILE_SIZE } })



