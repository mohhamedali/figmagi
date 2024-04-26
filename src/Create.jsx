import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { green } from '@mui/material/colors';
import Navbar from './Navbar'

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('');

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    const handleCreateRoom = () => {
        console.log(`Creating room: ${roomName}`);
    };

    return (
        <>
        <Navbar/>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
            }}
        >
            <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: '400px' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" component="h2">
                        Create a Room
                    </Typography>
                    <CloseIcon sx={{ cursor: 'pointer' }} />
                </Box>
                <Box mt={2}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Room Name"
                        value={roomName}
                        onChange={handleRoomNameChange}
                    />
                </Box>
                <Box mt={2}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ backgroundColor: green[500] }}
                        onClick={handleCreateRoom}
                    >
                        Create
                    </Button>
                </Box>
            </Paper>
        </Box>
        </>
    );
};

export default CreateRoom;