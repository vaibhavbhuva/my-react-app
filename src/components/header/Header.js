import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "../../redux/StateProvider";
import { getBasketItemsCount } from '../../redux/reducer';
import { auth } from '../../firebase';
  
  function Header() {
    const [{ basket, user }] = useStateValue();
    
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }
    
    return (
        <header className='header'>
            <Link to="/">
                <img className='header__logo' alt='' src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png' />
            </Link>
            <div className='header__search'>
                <input type='search' name='q' className="header__searchInput" />
                <Link to="/products" className='header__searchIcon'>
                    <SearchIcon />
                </Link>
            </div>
            <div className='header__nav'>
                <Link to={!user && "/login"} className='header__navItem'>
                    <div className='header__navItem' onClick={handleAuthentication}>
                        <span className='header__nav--lineOne'>Hello, {!user ? 'Guest' : user.email}</span>
                        <span className='header__nav--lineTwo'>
                        {user ? 'Sign Out' : 'Sign In' }
                    </span>
                    </div>
                </Link>
                <div className='header__navItem'>
                    <span className='header__nav--lineOne'>Returns</span>
                    <span className='header__nav--lineTwo'>& Orders</span>
                </div>
                <div className='header__navItem'>
                    <span className='header_nav--lineOne'>Your</span>
                    <span className='header_nav--lineTwo'>Prime</span>
                </div>
                <Link to="/checkout" className='header__navBasket'>
                    <ShoppingBasketIcon className='header__nav--lineOne header__nav--basketIcon' />
                    <span className='header__nav--lineTwo header__basketCount'>{getBasketItemsCount(basket)}</span>
                </Link>
            </div>
        </header>
      );
  }
  
  export default Header