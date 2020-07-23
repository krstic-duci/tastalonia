/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import Container from '../containers/Container';

export default function Shop() {
  return (
    <Container>
      <h1>Shop</h1>
      <Link to='/shop/kitchenwares'>Kitchenwares</Link>
      <Link to='/shop/bakewares'>Bakewares</Link>
    </Container>
  );
}
