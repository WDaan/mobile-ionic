import { Pin, iPin, IOType } from '../models/pin'

class IO {
    constructor(
        public inputs: iPin[] = [],
        public outputs: iPin[] = []
    ) {
        this.inputs = [new Pin(4, IOType.Input, true), new Pin(5, IOType.Input, false), new Pin(7, IOType.Input, true)]
        this.outputs = [new Pin(14, IOType.Output, true), new Pin(15, IOType.Output, true), new Pin(17, IOType.Output, false)]
    }

    addIo(pin: iPin) {
        if (pin.type === IOType.Input) {
            this.inputs.push(pin)
        }
        this.outputs.push(pin)
    }

    getIOs() {
        return [...this.inputs, ...this.outputs]
    }
}

export default new IO()