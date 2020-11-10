import React, { useState, useEffect } from 'react'
import { IonCard, IonList, IonCardContent, IonIcon, IonTitle, IonButton, IonCol, IonRow, IonSelect, IonSelectOption, IonCardTitle } from '@ionic/react'
import { trashOutline } from 'ionicons/icons'

import IO from '../services/io'
import { IOType, Pin } from '../models/pin'

const IOSettingsList: React.FC = () => {

    const [ios, setIOs] = useState<Pin[]>(IO.getIOs())

    const [shouldInterval] = useState(false);

    useEffect(() => {
        if (shouldInterval) {
            const interval = setInterval(() => setIOs(IO.getIOs()),
                1000
            );

            return () => clearInterval(interval);
        }
        console.log(ios)
    }, [shouldInterval, ios]);
    
    function deleteIo(io: Pin) {

    }

    return (
        <div>
            <IonTitle class="text-center">Available GPIO's</IonTitle>
            <IonCard>
                <IonCardContent className="no-padding pr-1">
                    <IonList lines='inset'>
                        {ios.length && ios.map(io =>
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
                                    <IonButton className="float-right" color='danger' onClick={() => deleteIo(io)}>
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
