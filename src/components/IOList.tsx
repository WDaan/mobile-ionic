import React, { useState } from 'react'
import { IonCard, IonList, IonCardContent, IonTitle } from '@ionic/react'

import './IO.css'

import IOItem from './IOItem'

import IO from '../services/io'


interface ContainerProps {
    type: string
}

const IOList: React.FC<ContainerProps> = ({ type }) => {

    const [ios] = useState(() => {
        return type === 'Inputs' ? IO.inputs : IO.outputs
    })
    return (
        <div>
            <IonTitle className='title'>{type}</IonTitle>
            <IonCard>
                <IonCardContent>
                    <IonList lines='inset'>
                        {ios.map(io =>
                            <IOItem key={io.pin} pin={io} />)
                        }
                    </IonList>
                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default IOList
