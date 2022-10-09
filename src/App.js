import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login';
import Admin from './pages/admin';
import User from './pages/user';
import Header from './components/Header';
import {Certificate} from './pages/certificate';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/certificate' element={<Certificate/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
