
import SignUp from './SignUp'; 
import SignIn from './SignIn';


import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(
        <React.StrictMode>
           <App/>
        </React.StrictMode>,
        rootElement
    );
}