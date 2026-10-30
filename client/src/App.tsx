import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './app/signup';
import Login from './app/login';

// --legacy-peer-deps

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
