const { Gpio } = require('onoff')
const File = require('./File')

class GPIO {
    constructor() {
        console.log('GPIO helper created!')

        this.config = [] // config of the IO's
        this.ios = [] // the IO instances

        // re-initiliaze previously saved io's
        this.read().forEach(el => {
            this.addIo(el.pin, el.mode)
        })
    }

    addIo(pin, mode) {
        this.config.push({ pin, mode })
        if (mode === 'in') { this.ios[pin] = new Gpio(pin, mode) } else { this.ios[pin] = new Gpio(pin, mode, 'both') }
        this.save()
    }

    deleteIo(pin) {
        this.config = this.config.filter(el => el.pin !== pin)
        delete this.ios[pin]
        this.save()
    }

    save() {
        File.save('gpio', this.config)
    }

    read() {
        return File.read('gpio')
    }

    getIoConfig() {
        return this.config
    }

    getIOStates() {
        const result = []
        this.config
            .forEach((el) => {
                result.push({ ...el, status: this.ios[el.pin].readSync() })
            })
        return result
    }

    writeOutput(pin, value) {
        const [io] = this.config.filter(el => el.pin === pin)
        if (io && io.mode === 'out') {
            return this.ios[pin].writeSync(value)
        }
    }
}

module.exports = new GPIO()
