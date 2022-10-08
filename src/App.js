import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import { Certificate } from './pages/certificate';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <h1>NFT Certificate</h1>
      <Header />
      <Certificate />
      <BrowserRouter> 
          <Routes>
            <Route path="/login" element={<login />} />
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
