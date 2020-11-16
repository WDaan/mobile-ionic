import React, { useState } from 'react'
import { IonModal, IonButton, IonContent, IonList, IonInput, IonTitle, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react'

import { IOType } from '../models/pin'
import IO from '../services/io'

interface ContainerProps {
    opened: boolean,
    setShowModal: any
}

const AddModal: React.FC<ContainerProps> = ({ opened, setShowModal }) => {

    const [pin, setPin] = useState<number | null>()
    const [type, setType] = useState<IOType | null>()


    async function addIO() {
        if (!pin) { return }

        const mode = type === IOType.Input ? 'in' : 'out'
        await IO.addIo(pin, mode)
        setPin(null)
        setType(null)
        setShowModal(false)
    }

    return (
        <IonModal isOpen={opened} cssClass='container'>
            <IonContent className='container'>
                <IonTitle className='title'>New GPIO</IonTitle>
                <IonList>
                    <IonItem>
                        <IonLabel position='fixed'>Pin</IonLabel>
                        <IonInput
                            type='number'
                            min="0" max="30"
                            value={pin} placeholder='Enter Number'
                            onIonChange={e => setPin(parseInt(e.detail.value!, 10))} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position='fixed'>Type</IonLabel>
                        <IonSelect interface='action-sheet'
                            aria-required
                            value={type}
                            placeholder='Type'
                            onIonChange={e => setType(e.detail.value)}
                        >
                            <IonSelectOption value={IOType.Input}>Input</IonSelectOption>
                            <IonSelectOption value={IOType.Output}>Output</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonButton color='success' onClick={() => addIO()}>
                <span className='white--text'>Save</span>
            </IonButton>
            <IonButton color='danger' onClick={() => setShowModal(false)}>Cancel</IonButton>
        </IonModal >
    )
}

export default AddModal
