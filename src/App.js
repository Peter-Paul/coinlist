import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './shared/nav';
import Ranks from './pages/ranks';
import Token from './pages/token';
import Footer from './shared/footer';

function App() {
  return (
    <Router>
      <div className="container mt-5">
                <div className="mb-3">
                    <Nav/>
                </div>
                <Routes>
                  <Route  exact path="/" 
                          element={ <Ranks/> }
                  />
                  <Route  exact path="/token" 
                          element={ <Token /> }
                  />
                </Routes>
                <Footer />
        </div>
    </Router>
  );
}

export default App;
