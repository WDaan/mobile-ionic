import React, { useState } from 'react'
import { IonBadge, IonLabel, IonItem, IonToggle } from '@ionic/react'

import './IO.css'

import { iPin, IOType } from '../models/pin'

interface ContainerProps {
    pin: iPin
}

const IOItem: React.FC<ContainerProps> = ({ pin }) => {

    function setChecked(value: any) {
        console.log(value)
    }

    const statusColor = pin.status ? 'success' : 'danger'

    return (
        <IonItem>
            <IonLabel>{pin.pin}</IonLabel>
            { pin.type === IOType.Input && (<IonBadge className='badge' color={statusColor}> </IonBadge>)}
            { pin.type === IOType.Output &&
                (<IonToggle
                    color='success' mode='ios'
                    checked={pin.status}
                    onIonChange={e => setChecked(e.detail.checked)}
                />)
            }
        </IonItem>
    )
}

export default IOItem
