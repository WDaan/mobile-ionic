import React from 'react'
import { IonBadge, IonTitle, IonRow, IonCol, IonToggle, IonIcon } from '@ionic/react'
import { bulbOutline } from 'ionicons/icons'

import './IO.css'

import { iPin, IOType } from '../models/pin'
import IO from '../services/io'

interface ContainerProps {
    pin: iPin
}

const IOItem: React.FC<ContainerProps> = ({ pin }) => {

    function setChecked(value: boolean) {
        IO.setIo(pin.pin, value)
    }

    const statusColor = pin.status ? 'success' : 'danger'
    const input = pin.type === IOType.Input

    return (
        <IonRow class='item'>
            <IonCol>
                <IonTitle>Pin: {pin.pin}</IonTitle>
            </IonCol>
            <IonCol className='badgeContainer' style={{ display: input ? '' : 'flex' }}>
                <IonBadge className='badge' style={{ float: input ? 'right' : '' }} color={statusColor}>
                    <IonIcon className="bulbIcon" icon={bulbOutline} />
                </IonBadge>
            </IonCol>
            { !input &&
                (
                    <IonCol>
                        <IonToggle class='toggle'
                            color='success' mode='ios'
                            checked={pin.status}
                            onIonChange={e => setChecked(e.detail.checked)}
                        />
                    </IonCol>)
            }
        </IonRow>
    )
}

export default IOItem
