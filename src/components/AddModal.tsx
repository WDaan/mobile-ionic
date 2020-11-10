import React, { useState } from 'react'
import { IonModal, IonButton, IonContent, IonList, IonInput, IonTitle, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react'

import { IOType } from '../models/pin'

import './AddModal.css'

interface ContainerProps {
    opened: boolean,
    setShowModal: any
}

const AddModal: React.FC<ContainerProps> = ({ opened, setShowModal }) => {

    const [pin, setPin] = useState<number>();
    const [type, setType] = useState<IOType>();


    return (
        <IonModal isOpen={opened} cssClass='container'>
            <IonContent className="container">
                <IonTitle className="title">New GPIO</IonTitle>
                <IonList>
                    <IonItem>
                        <IonLabel position="fixed">Pin</IonLabel>
                        <IonInput
                            type="number"
                            value={pin} placeholder="Enter Number"
                            onIonChange={e => setPin(parseInt(e.detail.value!, 10))}>
                        </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="fixed">Type</IonLabel>
                        <IonSelect interface="action-sheet" value={type} placeholder="Type" onIonChange={e => setType(e.detail.value)}>
                            <IonSelectOption value={IOType.Input}>Input</IonSelectOption>
                            <IonSelectOption value={IOType.Output}>Output</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal >
    )
}

export default AddModal
