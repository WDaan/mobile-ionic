import { Pin, iPin, IOType } from '../models/pin'

class IO {
    constructor(
        public inputs: iPin[] = [],
        public outputs: iPin[] = []
    ) {
        this.inputs = [new Pin(4, true, IOType.Input), new Pin(5, false, IOType.Input), new Pin(7, false, IOType.Input)]
        this.outputs = [new Pin(14, true, IOType.Output), new Pin(15, true, IOType.Output), new Pin(17, false, IOType.Output)]
    }

    addIo(pin: iPin) {
        if (pin.type === IOType.Input) {
            this.inputs.push(pin)
        }
        this.outputs.push(pin)
    }
}

export default new IO()