import { IonContent, IonHeader, IonPage, IonButtons, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/react'
import React from 'react'
import { RefresherEventDetail } from '@ionic/core'

import './Home.css'

import IOList from '../components/IOList'
import InfoModal from '../components/InfoModal'

import { IOType } from '../models/pin'
import { clearIoCache } from '../services/queryCache'


const Home: React.FC = () => {
    async function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        clearIoCache()
        event.detail.complete()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                    <IonButtons slot='end'>
                        <InfoModal />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot='fixed' onIonRefresh={doRefresh}>
                    <IonRefresherContent />
                </IonRefresher>
                <div className='container'>
                    <IOList type={IOType.Input} />
                    <IOList type={IOType.Output} />
                </div>
            </IonContent>

        </IonPage >
    )
}

export default Home
