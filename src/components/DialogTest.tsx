import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react'

const DialogTest = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                同意する
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                    同意しますか？
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Button variant='outlined' onClick={() => setOpen(false)}>
                            同意する
                        </Button>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>
                        閉じる
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogTest