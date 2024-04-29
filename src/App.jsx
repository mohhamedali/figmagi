import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import Color from './Color'
import Create from './Create'




function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/color' element={<Color/>}/>
      <Route path='/create' element={<Create/>}/>
     
    </Routes>

 </BrowserRouter>
     
    </div>
  );
}

export default App;
