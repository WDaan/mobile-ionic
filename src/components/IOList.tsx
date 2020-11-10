import React, { useEffect, useState } from 'react'
import { IonCard, IonList, IonCardContent, IonTitle } from '@ionic/react'

import './IO.css'

import IOItem from './IOItem'

import IO from '../services/io'

import { IOType, Pin } from '../models/pin'


interface ContainerProps {
    type: string
}

const IOList: React.FC<ContainerProps> = ({ type }) => {

    const [ios, setIOs] = useState<Pin[]>(IO.getIOs(type))

    const [shouldInterval2] = useState(false);

    useEffect(() => {
        if (shouldInterval2) {
            const interval = setInterval(() => setIOs(IO.getIOs(type)),
                1000
            );

            return () => clearInterval(interval);
        }
    }, [shouldInterval2, ios, type]);


    return (
        <div>
            <IonTitle className='title'>{type}</IonTitle>
            <IonCard>
                <IonCardContent className="no-padding pr-1">
                    <IonList lines='inset'>
                        {ios && ios.length && ios.map(io =>
                            <IOItem key={io.pin} pin={io} />)
                        }
                    </IonList>
                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default IOList
