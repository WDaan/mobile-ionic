import React, { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonFab, IonIcon } from '@ionic/react'
import { add } from 'ionicons/icons'


import AddModal from '../components/AddModal'
import IOSettingsList from '../components/IOSettingsList'
import ConnectHostForm from '../components/ConnectHostForm'

const Tab2: React.FC = () => {

    const [showModal, setShowModal] = useState<boolean>(false)

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
                <ConnectHostForm />
                <IOSettingsList />
                <AddModal opened={showModal} setShowModal={setShowModal} />
                <IonFab vertical='bottom' horizontal='end' slot='fixed'>
                    <IonFabButton color='success' onClick={() => setShowModal(true)}>
                        <IonIcon class='white--text' icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Tab2
