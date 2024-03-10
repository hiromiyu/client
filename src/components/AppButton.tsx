import { Button } from '@mui/material';
import React from 'react'

interface ListItem {
    id: number;
    name: string;
}

type Props = {
    appButton: ListItem
};

const AppButton = (props: Props) => {
    const { appButton } = props;

    return (
        <div>
            <Button>
                {appButton.name}
            </Button>
        </div>
    )
}

export default AppButton