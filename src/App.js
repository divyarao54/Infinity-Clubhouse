///https://www.playarena.in/

import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './routes/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route exact path='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
