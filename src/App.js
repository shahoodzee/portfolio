import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/homeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/portfolio" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
