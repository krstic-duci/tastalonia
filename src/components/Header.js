/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import { headerLink } from '../utils/customStyles';

export default function Header() {
  const Joint = (props) => (
    <Link
      css={css`
        ${headerLink};
      `}
      {...props}
    />
  );
  return (
    <header
      css={css`
        position: fixed;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 2px 5px -2px gray;
        z-index: 250;
      `}
    >
      <nav>
        <ul
          css={css`
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 0;
            padding: 0;
          `}
        >
          <Joint to='/'>
            <img
              src={logo}
              alt='logo'
              css={css`
                width: 100px;
              `}
            />
          </Joint>
          <Joint to='/recipes'>Recipes</Joint>
          <Joint to='/profile'>Profile</Joint>
          <Joint to='/shop'>Shop</Joint>
        </ul>
      </nav>
    </header>
  );
}
