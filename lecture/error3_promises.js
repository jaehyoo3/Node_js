const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./afdgd.js')
}, 1000);