import React, { Component } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default class Header extends Component {
    render() {
      return (
        <header className='header'>
            <img className='header__logo' alt='' src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png' />
            <div className='header__search'>
                <input type='search' name='q' className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <div className='header__navItem'>
                    <span className='header__nav--lineOne'>Hello, Guest</span>
                    <span className='header__nav--lineTwo'>Sign In</span>
                </div>
                <div className='header__navItem'>
                    <span className='header__nav--lineOne'>Returns</span>
                    <span className='header__nav--lineTwo'>& Orders</span>
                </div>
                <div className='header__navItem'>
                    <span className='header_nav--lineOne'>Your</span>
                    <span className='header_nav--lineTwo'>Prime</span>
                </div>
                <div className='header__navBasket'>
                    <ShoppingBasketIcon className='header__nav--lineOne header__nav--basketIcon' />
                    <span className='header__nav--lineTwo header__basketCount'>0</span>
                </div>
            </div>
        </header>
      );
    }
  }
  