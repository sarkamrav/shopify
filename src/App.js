import logo from './logo.svg';
import './App.css';
import {Routes, Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Header from './Pages/Header';
function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path="/" element={<Home />} />
       </Routes>

    </div>
  );
}

export default App;



