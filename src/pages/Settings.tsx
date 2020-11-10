import React, { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonFab, IonIcon } from '@ionic/react'
import { add } from 'ionicons/icons';


import './Settings.css'

import AddModal from '../components/AddModal'

const Tab2: React.FC = () => {

    const [showModal, setShowModal] = useState<boolean>(true)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <AddModal opened={showModal} setShowModal={setShowModal} />
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton color="success" onClick={() => setShowModal(true)}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Tab2
