import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

import IOList from '../components/IOList'

import './Home.css'

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className='container'>
                    <IOList type='Inputs' />
                    <IOList type='Outputs' />
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Home
