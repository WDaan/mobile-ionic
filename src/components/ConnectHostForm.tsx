import React, { useState } from 'react'
import { IonToast, IonCard, IonButton, IonIcon, IonInput, IonItem, IonLabel, IonCardContent } from '@ionic/react'
import { saveOutline } from 'ionicons/icons'

import IO from '../services/io'

const ConnectHostForm: React.FC = () => {

    const [host, setHost] = useState<string>(localStorage.getItem('host') || 'http://10.0.0.26:3000/')
    const [toastFail, showFail] = useState<boolean>(false)
    const [toastSuccess, showSuccess] = useState<boolean>(false)

    async function saveHost() {
        IO.checkHost(host).then((res: any) => {
            const { data, status } = res
            if (data === 'success' && status === 200) {
                IO.setHost(host)
                return showSuccess(true)
            }

        }).catch(() => showFail(true))
    }

    return (
        <div className='pt-1 pb-1'>
            <IonCard>
                <IonCardContent>
                    <IonItem>
                        <IonLabel position='fixed'>Host</IonLabel>
                        <IonInput
                            value={host} placeholder='Enter host'
                            onIonChange={e => setHost(e.detail.value!)} />
                        <IonButton className='float-right' color='success' onClick={() => saveHost()}>
                            <IonIcon className='white--text' icon={saveOutline} />
                        </IonButton>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            <IonToast
                color='danger'
                isOpen={toastFail}
                onDidDismiss={() => showFail(false)}
                message='Failed to connect to host'
                duration={500}
            />
            <IonToast
                color='success'
                isOpen={toastSuccess}
                onDidDismiss={() => showSuccess(false)}
                message='Connected to host successfully!'
                duration={500}
            />
        </div>
    )
}

export default ConnectHostForm
