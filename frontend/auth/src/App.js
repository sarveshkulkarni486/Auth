import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/Register' Component={Register} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
