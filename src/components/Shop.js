import React from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <Link to='/shop/kitchenwares'>Kitchenwares</Link>
      <Link to='/shop/bakewares'>Bakewares</Link>
    </>
  );
}
