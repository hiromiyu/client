import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { useState } from 'react';

interface ListItem {
    id: number;
    text: string;
}

const RegisterForApp: React.FC = () => {
    const [items, setItems] = useState<ListItem[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    const handleAddItem = () => {
        const newItem: ListItem = {
            id: items.length + 1,
            text: `アプリ ${items.length + 1}`,
        };
        setItems([...items, newItem]);
    };

    const handleRemoveItem = () => {
        if (selectedItemId !== null) {
            const updatedItems = items.filter(item => item.id !== selectedItemId);
            setItems(updatedItems);
            setSelectedItemId(null);
        }
    };

    const handleSelectItem = (itemId: number) => {
        setSelectedItemId(itemId);
    };

    const handleMoveItem = (direction: 'up' | 'down') => {
        if (selectedItemId !== null) {
            const selectedItemIndex = items.findIndex(item => item.id === selectedItemId);
            if (selectedItemIndex !== -1) {
                const updatedItems = [...items];
                const targetIndex = direction === 'up' ? selectedItemIndex - 1 : selectedItemIndex + 1;

                if (targetIndex >= 0 && targetIndex < items.length) {
                    [updatedItems[selectedItemIndex], updatedItems[targetIndex]] = [
                        updatedItems[targetIndex],
                        updatedItems[selectedItemIndex],
                    ];
                    setItems(updatedItems);
                }
            }
        }
    };

    return (
        <Box>
            <Box style={{ display: 'flex', justifyContent: "center" }}>
                <List style={{ width: "75%", margin: "5px" }}>
                    {items.map(item => (
                        <ListItem
                            key={item.id}
                            style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", border: "solid", borderWidth: "thin", marginBottom: "1px", backgroundColor: selectedItemId === item.id ? 'lightblue' : 'white' }}
                        >
                            <Box style={{ display: 'flex', alignItems: "center" }}>
                                <img style={{ width: "30px", height: "30px", marginRight: "10px", marginLeft: "50px" }}
                                    src="anya31.jpg"
                                    alt="アーニャ"
                                />
                                <Typography>{item.text}</Typography>
                            </Box>
                            <Box>
                                <Button variant="outlined" style={{ marginRight: "2px" }}
                                    onClick={() => handleSelectItem(item.id)}
                                >
                                    選択
                                </Button>
                                <Button variant="outlined"
                                    onClick={() => setSelectedItemId(null)}
                                >
                                    解除
                                </Button>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <Box style={{ width: "75%" }}>
                    <Button variant="outlined" style={{ marginRight: "5px" }} onClick={handleAddItem}>追加</Button>
                    <Button variant="outlined" style={{ marginRight: "5px" }} onClick={handleRemoveItem} disabled={selectedItemId === null}>
                        削除
                    </Button>
                    <Button variant="outlined" style={{ marginRight: "5px" }} onClick={() => handleMoveItem('up')} disabled={selectedItemId === null || items.length < 2}>
                        上に移動
                    </Button>
                    <Button variant="outlined" onClick={() => handleMoveItem('down')} disabled={selectedItemId === null || items.length < 2}>
                        下に移動
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterForApp;