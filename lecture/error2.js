const fs = require('fs');

setInterval(() => {
    fs.unlink('/absdf.js', (err) => {
        if(err) {
            console.error(err);
        }
    })
}, 1000);