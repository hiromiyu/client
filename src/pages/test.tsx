import AppButton from '@/components/AppButton'
import React, { useState } from 'react'

interface ListItem {
    id: number;
    name: string;
}

const appList = [{
    id: 1,
    name: ""
}];

const test = () => {
    const [latestApps, setLatestApps] = useState<ListItem[]>([appList[0]]);

    return (
        <div>
            {latestApps.map((appButton: ListItem) => (
                <AppButton key={appButton.id} appButton={appButton} />
            ))}
        </div>
    )
}

export default test