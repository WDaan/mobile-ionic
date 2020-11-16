import { Pin, IOType } from '../models/pin'
import axios from 'axios'

class IO {
    private axios: any

    constructor() {
        this.initAxios()
    }

    initAxios() {
        this.axios = axios.create({
            baseURL: localStorage.getItem('host') || 'http://10.0.0.26:3000/'
        })
    }

    setHost(host: string) {
        localStorage.setItem('host', host)
        this.initAxios()
    }

    checkHost(host: string) {
        return this.axios.get(`${host}/connect`)
    }

    addIo(pin: number, mode: string) {
        this.axios.post('/', {
            pin,
            mode
        })
    }

    deleteIo(pin: number) {
        return this.axios.delete(`/${pin}`)
    }

    editIO(pin: number, mode: string) {
        return this.axios.put(`/${pin}`, { mode })
    }

    fetchIos() {
        return this.axios.get('/status')
            .then((res: any) => res
                .data.map((el: any) =>
                    new Pin(el.pin,
                        el.mode === 'in' ? IOType.Input : IOType.Output,
                        el.status)
                ))
    }

    async setIo(pin: number, status: boolean) {
        this.axios.post(`/${pin}`, { status: status ? 1 : 0 })
    }
}

export default new IO()