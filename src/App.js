import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/diary/:id" element={<Diary/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
