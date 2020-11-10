const fs = require('fs')

class File {
    constructor() {
        console.log('File helper created!')
        if (!fs.existsSync('data')) {
            console.log(`${new Date().toUTCString()}; making data directory...`)
            fs.mkdirSync('data')
        }
    }

    read(filename) {
        return JSON.parse(fs.readFileSync(`data/${filename}.json`))
    }

    save(filename, data) {
        fs.writeFileSync(`data/${filename}.json`, JSON.stringify(data))
    }
}

module.exports = new File()
