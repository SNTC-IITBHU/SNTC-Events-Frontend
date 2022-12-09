import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
function App() {
  return (
   <><BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path='/login' element={<LogIn />} />
<Route path='/register' element={<Register />} />
</Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
