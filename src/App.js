import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Journey from './components/Journey';
import Store from './components/Store';
import Team from './components/Team';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/journey' element={<Journey/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
