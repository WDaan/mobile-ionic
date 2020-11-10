import React from 'react'
import { IonCard, IonList, IonCardContent, IonIcon, IonTitle, IonButton, IonCol, IonRow, IonSelect, IonSelectOption } from '@ionic/react'
import { trashOutline } from 'ionicons/icons'
import { useQuery } from 'react-query'

import { IOType, Pin } from '../models/pin'
import IO from '../services/io'

import { clearIoCache } from '../services/queryCache'

const IOSettingsList: React.FC = () => {
    async function fetchIos() {
        const ios = await IO.fetchIos()
        return ios.sort((a: Pin, b: Pin) => a.pin - b.pin)
    }
    const { data } = useQuery(`ios`, fetchIos)

    async function deleteIo(io: Pin) {
        await IO.deleteIo(io.pin)
        clearIoCache()
    }

    async function changeType(io: Pin, type: any) {
        const mode = type === IOType.Input ? 'in' : 'out'
        await IO.editIO(io.pin, mode)
        clearIoCache()
    }


    return (
        <div>
            <IonTitle class='text-center'>Available GPIO's</IonTitle>
            <IonCard>
                <IonCardContent className='no-padding pr-1'>
                    <IonList lines='inset'>
                        {data && data.map((io: Pin) =>
                            <IonRow key={io.pin}>
                                <IonCol>
                                    <IonTitle>Pin: {io.pin}</IonTitle>
                                </IonCol>
                                <IonCol>
                                    <IonSelect className='select'
                                        interface='action-sheet'
                                        value={io.type} placeholder='Type'
                                        onIonChange={e => changeType(io, e.detail.value)}
                                    >
                                        <IonSelectOption value={IOType.Input}>Input</IonSelectOption>
                                        <IonSelectOption value={IOType.Output}>Output</IonSelectOption>
                                    </IonSelect>
                                </IonCol>
                                <IonCol>
                                    <IonButton className='float-right' color='danger' onClick={() => deleteIo(io)}>
                                        <IonIcon icon={trashOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                        }
                    </IonList>
                </IonCardContent >
            </IonCard >
        </div>
    )
}

export default IOSettingsList
