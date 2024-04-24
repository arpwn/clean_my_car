import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import PasswordScreen from './components/PasswordScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/password" element={<PasswordScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
