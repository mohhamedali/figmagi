import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { blue } from '@mui/material/colors';

const Color = () => {
    const [color, setColor] = useState<string>('#000000');

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setColor(event.target.value);
    };

    return (
        <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h5" gutterBottom>
                Pick a Color
            </Typography>
            <TextField
                type="color"
                value={color}
                onChange={handleColorChange}
                variant="outlined"
                sx={{ width: 150, height: 150, border: 'none', cursor: 'pointer', margin: '16px auto' }}
            />
            <Paper elevation={3} sx={{ width: '50%', height: 150, backgroundColor: color, margin: '16px auto' }}>
                <Typography variant="h6" sx={{ color: '#fff', p: 2 }}>
                    {color}
                </Typography>
            </Paper>
            <Button
                variant="contained"
                sx={{ backgroundColor: blue[500], color: 'white', marginTop: '16px' }}
                onClick={() => alert(`Selected color: ${color}`)}
            >
                Confirm Color
            </Button>
        </Box>
    );
};

export default Color;