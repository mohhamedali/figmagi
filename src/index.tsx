import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './signUp'; 
import SignIn from './signIn';
import MainInterface from './mainInterface';
import CreateRoom from './create';
import ColorPicker from './color';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/maininterface" element={<MainInterface />} />
                    <Route path="/createroom" element={<CreateRoom />} />
                    <Route path="/colorpicker" element={<ColorPicker />} />
                </Routes>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signin">Sign In</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/maininterface">Main Interface</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/createroom">Create Room</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/colorpicker">Color Picker</Link>
                </div>
            </BrowserRouter>
        </React.StrictMode>,
        rootElement
    );
}