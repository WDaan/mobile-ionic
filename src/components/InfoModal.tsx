import React, { useState } from 'react'
import { IonModal, IonButton, IonContent, IonIcon, IonTitle, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow } from '@ionic/react'
import { informationCircleOutline } from 'ionicons/icons'

const InfoModal: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(true)

    function openGuide() {
        window.open('https://github.com/WDaan/mobile-ionic', '_blank')
    }

    return (
        <div>
            <IonIcon className='infoIcon' onClick={e => setShowModal(true)} icon={informationCircleOutline} />
            <IonModal isOpen={showModal} cssClass='container'>
                <IonContent className='container'>
                    <IonTitle className='title'>Info</IonTitle>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className='text-center' >GPIO Layout</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <img className='ioImage' src='/assets/gpio.png' alt='gpio layout' />
                        </IonCardContent>
                    </IonCard>
                    <IonRow>
                        <IonCol size='12' className='mx-auto text-center'>
                            <IonButton
                                color='primary'
                                onClick={() => openGuide()}
                            >
                                RPI Setup Guide
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonContent>
                <IonButton color='primary' onClick={() => setShowModal(false)}>Close</IonButton>
            </IonModal >
        </div>
    )
}

export default InfoModal
