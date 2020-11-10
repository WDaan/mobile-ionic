import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/react'
import React, { useEffect } from 'react'
import { RefresherEventDetail } from '@ionic/core';

import IOList from '../components/IOList'

import './Home.css'

import { useSetRecoilState } from 'recoil'

import { ios } from '../services/store'
import IO from '../services/io'

import { IOType } from '../models/pin'

const Home: React.FC = () => {

    const setIos = useSetRecoilState(ios)

    const fetchIos = async () => {
        const ios = await IO.fetchIos()
        setIos(ios)
    }

    useEffect(() => {
        fetchIos()
    })

    async function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        await fetchIos()

        event.detail.complete();
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
