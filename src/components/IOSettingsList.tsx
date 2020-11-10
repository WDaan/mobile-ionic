import React, { useState } from 'react'
import { IonCard, IonList, IonCardContent, IonIcon, IonTitle, IonButton, IonCol, IonRow, IonSelect, IonSelectOption } from '@ionic/react'
import { trashOutline } from 'ionicons/icons'

import './IOSettingsList.css'

import IO from '../services/io'
import { IOType, iPin } from '../models/pin'

const IOSettingsList: React.FC = () => {

    const [ios] = useState<iPin[]>(IO.getIOs())

    function deleteIo(io: iPin) {

    }

    return (
        <IonCard>
            <IonCardContent class="no-padding">
                <IonList lines='inset'>
                    {ios.map(io =>
                        <IonRow key={io.pin}>
                            <IonCol>
                                <IonTitle>Pin: {io.pin}</IonTitle>
                            </IonCol>
                            <IonCol>
                                <IonSelect className="select" interface='action-sheet' value={io.type} placeholder='Type'>
                                    <IonSelectOption value={IOType.Input}>Input</IonSelectOption>
                                    <IonSelectOption value={IOType.Output}>Output</IonSelectOption>
                                </IonSelect>
                            </IonCol>
                            <IonCol>
                                <IonButton className="deleteButton" color='danger' onClick={() => deleteIo(io)}>
                                    <IonIcon icon={trashOutline} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    )
                    }
                </IonList>
            </IonCardContent >
        </IonCard >
    )
}

export default IOSettingsList
