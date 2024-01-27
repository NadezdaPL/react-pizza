import React from 'react';
import cartEmptyImg from '../assets/images/cartEmpty.png';
import { Link } from 'react-router-dom';

export const CartEmpty: React.FC = () => (
  <div className='cart cart--empty'>
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      Most likely, you haven't ordered pizza yet.
      <br />
      To order pizza, you need to go to the main page.
    </p>
    <img src={cartEmptyImg} alt='Empty cart' />
    <Link to='/' className='button button--black'>
      <span>Back</span>
    </Link>
  </div>
);
