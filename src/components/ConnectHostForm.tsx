import React, { useState } from 'react'
import { IonCard, IonButton, IonIcon, IonInput, IonTitle, IonItem, IonLabel, IonSelect, IonSelectOption, IonCardContent } from '@ionic/react'
import { checkmarkOutline } from 'ionicons/icons'

const ConnectHostForm: React.FC = () => {

    const [host, setHost] = useState<string>()

    function saveHost() {


    }

    return (
        <div className="pt-1 pb-1">
            <IonCard>
                <IonCardContent>
                    <IonItem>
                        <IonLabel position='fixed'>Host</IonLabel>
                        <IonInput
                            value={host} placeholder='Enter host'
                            onIonChange={e => setHost(e.detail.value!)} />
                        <IonButton className="float-right" color='success' onClick={() => saveHost()}>
                            <IonIcon className="white--text" icon={checkmarkOutline} />
                        </IonButton>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default ConnectHostForm
