const multer = require('multer');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'img/');
    },
    filename: function (req, file, cb) {
        const name = file.originalname.split(' ').join('_');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + Date.now() + '.' + ext);
    }
})

module.exports = multer({ storage: storage }).single('image');