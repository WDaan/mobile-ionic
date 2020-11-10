import React, { useEffect, useState } from 'react'
import { IonCard, IonList, IonCardContent, IonTitle } from '@ionic/react'

import './IO.css'

import IOItem from './IOItem'

import IO from '../services/io'

import { IOType, Pin } from '../models/pin'

import { ios as iosAtom } from '../services/store'

import { useRecoilValue } from 'recoil'

interface ContainerProps {
    type: IOType
}

const IOList: React.FC<ContainerProps> = ({ type }) => {

    const ios = useRecoilValue(iosAtom)

    const title = type === IOType.Input ? 'Inputs' : 'Outputs'

    return (
        <div>
            <IonTitle className='title'>{title}</IonTitle>
            <IonCard>
                <IonCardContent className='no-padding pr-1'>
                    <IonList lines='inset'>
                        {ios && ios.length &&
                            ios.filter((pin: Pin) => pin.type === type)
                                .map((io: Pin) =>
                                    <IOItem key={io.pin} pin={io} />)
                        }
                    </IonList>
                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default IOList
