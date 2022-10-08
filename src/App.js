import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login';
import Admin from './pages/admin';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
