import React, { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonFab, IonIcon, IonRefresher, IonRefresherContent } from '@ionic/react'
import { RefresherEventDetail } from '@ionic/core'
import { add } from 'ionicons/icons'

import AddModal from '../components/AddModal'
import IOSettingsList from '../components/IOSettingsList'
import ConnectHostForm from '../components/ConnectHostForm'

import { clearIoCache } from '../services/queryCache'

const Settings: React.FC = () => {

    const [showModal, setShowModal] = useState<boolean>(false)

    async function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        clearIoCache()
        event.detail.complete()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot='fixed' onIonRefresh={doRefresh}>
                    <IonRefresherContent />
                </IonRefresher>
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

export default Settings
