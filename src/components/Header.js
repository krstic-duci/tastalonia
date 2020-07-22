/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';

export default function Header() {
  return (
    <ul
      css={css`
        padding: 32px;
      `}
    >
      <Link to='/'>
        <img src={logo} alt='logo' width='50' height='50' />
      </Link>
      <Link to='/recipes'>Recipes</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/shop'>Shop</Link>
    </ul>
  );
}
