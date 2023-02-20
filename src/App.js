import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Checkout from './components/checkout/Checkout.js';
import Products from './components/products/Product.js';
import Login from './components/login/Login.js';
import { useStateValue } from './redux/StateProvider';
import Payment from './components/payment/Payment.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const onAuthStateChange = (callback) => {
  return auth.onAuthStateChanged((user) => {
    console.log('THE USER IS >>> ', user);
    if(user) {
      // The use is logged in
      callback({
        type:'SET_USER',
        user: user
      });
    } else {
      // the user is logged out
      callback({
        type:'SET_USER',
        user: null
      });
    }
    
  })
};

const promise = loadStripe("<PUBLIC_KEY>");

function App() {
  // const auth = getAuth();
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = onAuthStateChange(dispatch);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/payment" element={
           <Elements stripe={promise}>
             <Payment />
           </Elements>
          } />
          <Route
            path="*"
            element={
              <main className="pageNotFound">
                <h2>Sorry, page not found!</h2>
                <p>
                  Sorry, we could not find the page you are looking for. Perhaps
                  you have mistyped the URL? Be sure to check your spelling.
                </p>
                <img
                  alt=""
                  src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1380&amp;t=st=1648891062~exp=1648891662~hmac=144ae9d1fa1cc212a904f6ff4f3f04bf1a92808e533223015191a94aeb75bd4d"
                />
                <button>Go to Home</button>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
