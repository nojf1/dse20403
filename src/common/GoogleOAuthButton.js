import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';


ReactDOM.render(
    <GoogleOAuthProvider clientId="979457715207-ej65g5n8iounp1fqtmcs17air6p8as30.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>, 
    document.getElementById('root')
);