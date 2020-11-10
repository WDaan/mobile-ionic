import { Pin, iPin, IOType } from '../models/pin'
import axios from 'axios'

class IO {
    private ios: iPin[]
    private axios: any
    private interval: any

    constructor() {
        this.axios = axios.create({
            baseURL: localStorage.getItem('host') || 'http://10.0.0.26:3000/'
        })

        this.ios = []

        this.interval = setInterval(() => {
            this.fetchIios()
        }, 500)
    }

    addIo(pin: iPin) {
        this.axios.post('/', pin)
    }

    getIOs(option: string = '') {
        if (!this.ios || !this.ios.length) return []
        if (option === 'Inputs')
            return this.ios.filter((io: Pin) => io.type === IOType.Input)
        if (option === 'Outputs')
            return this.ios.filter((io: Pin) => io.type === IOType.Output)
        return this.ios
    }

    private async fetchIios() {
        const data = await this.axios.get('/status').then((res: any) => res.data)
        const temp: Pin[]= [];
        data.forEach((el: any) => {
           temp.push(new Pin(el.pin, el.mode === 'in' ? IOType.Input : IOType.Output, el.status))
        })
        this.ios = temp
    }

    setHost(host: string) {
        localStorage.setItem('host', host)
    }
}

export default new IO()