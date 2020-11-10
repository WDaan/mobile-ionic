export interface iPin {
    pin: number,
    status: boolean,
    type: IOType
}

export enum IOType {
    Input,
    Output
}

export class Pin implements iPin {
    constructor(public pin: number, public type: IOType, public status: boolean = false) { }
}