import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/react'
import React, { useEffect } from 'react'
import { RefresherEventDetail } from '@ionic/core'
import { useSetRecoilState } from 'recoil'

import './Home.css'

import IOList from '../components/IOList'

import { ios } from '../services/store'
import { IOType } from '../models/pin'
import IO from '../services/io'


const Home: React.FC = () => {

    const setIos = useSetRecoilState(ios)

    const fetchIos = async () => {
        const data = await IO.fetchIos()
        setIos(data)
    }

    useEffect(() => {
        fetchIos()
    })

    async function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        await fetchIos()

        event.detail.complete()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <div className='container'>
                    <IOList type={IOType.Input} />
                    <IOList type={IOType.Output} />
                </div>

            </IonContent>
        </IonPage >
    )
}

export default Home
