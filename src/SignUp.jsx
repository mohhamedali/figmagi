import React from 'react';
import {useState} from 'react'
import { Button, TextField, Checkbox, FormControlLabel, Typography, Paper } from '@mui/material';
import { teal } from '@mui/material/colors';
import Navbar from './Navbar'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        termsAgreed: false,
    });

    const handleInputChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
        <Navbar/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#F5F5F5' }}>
            <Paper elevation={3} style={{ padding: '40px', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
                <Typography variant="h4" component="h1" textAlign="center" gutterBottom color="primary">
                    Get Started! 🚀
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        control={<Checkbox name="termsAgreed" checked={formData.termsAgreed} onChange={handleInputChange} />}
                        label="I agree to the Terms of Service and Privacy Policy"
                    />
                    <Button type="submit" variant="contained" style={{ backgroundColor: teal[500], color: 'white' }}>
                        Sign Up
                    </Button>
                    <Typography variant="body2" style={{ textAlign: 'center', color: teal[500], cursor: 'pointer' }}>
                        Already have an account? Sign in instead
                    </Typography>
                </form>
            </Paper>
        </div>
        </>
    );
}

export default SignUp;