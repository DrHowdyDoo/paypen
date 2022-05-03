import './App.css';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
