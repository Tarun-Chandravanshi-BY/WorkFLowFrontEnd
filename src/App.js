import './App.css';
import AssignedShifts from './components/AssignedShifts';
import AvailableShifts from './components/AvailableShifts';
import HomePage from './components/Home';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='availableshifts' element={<AvailableShifts/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='assignedshifts' element={<AssignedShifts/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
