import React from 'react'
import { IonCard, IonList, IonCardContent, IonTitle, IonLabel } from '@ionic/react'
import { useQuery } from 'react-query'

import './IO.css'

import IOItem from './IOItem'
import { IOType, Pin } from '../models/pin'
import IO from '../services/io'

interface ContainerProps {
    type: IOType
}

const IOList: React.FC<ContainerProps> = ({ type }) => {
    const title = type === IOType.Input ? 'Inputs' : 'Outputs'

    async function fetchIos() {
        const data = await IO.fetchIos()
        return data.filter((pin: Pin) => pin.type === type)
    }
    const { data } = useQuery(`ios-${title}`, fetchIos)


    return (
        <div>
            <IonTitle className='title'>{title}</IonTitle>
            <IonCard>
                <IonCardContent className='no-padding pr-1'>
                    <IonList lines='inset'>
                        {data && data.map((io: Pin) =>
                            <IOItem key={io.pin} pin={io} />)
                        }
                        {!data && (
                            <IonList lines='inset' className='text-center'>
                                <IonLabel>
                                    <span >None available</span>
                                </IonLabel>
                            </IonList>)}
                    </IonList>
                </IonCardContent>
            </IonCard>
        </div >
    )
}

export default IOList
