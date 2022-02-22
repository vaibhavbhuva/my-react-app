import Header from './components/header/Header.js'
import Home from './components/home/Home.js';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './components/checkout/Checkout.js';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header/>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/checkout" element={
            <Checkout />
          } />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
