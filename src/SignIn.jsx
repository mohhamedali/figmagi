import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { orange } from '@mui/material/colors';
import Navbar from './Navbar'

const SignIn = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const styles = {
      container: {
        padding: '20px',
        backgroundColor: isHovered ? 'blue' : 'orange',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        height:'3rem'
      }
    };
   

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
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
                    Welcome Back! 👋
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <Button type="submit" variant="contained"  style={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
                        Log in
                    </Button>
                    <Typography variant="body2" textAlign="center" style={{ color: orange[500], cursor: 'pointer' }}>
                        Forgot Password?
                    </Typography>
                </form>
            </Paper>
        </div>
        </>
    );
}

export default SignIn;