/**@jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Button } from '../../utils/customStyles';
import {
  addFavRecipe,
  selectFavRecipe,
  removeFavRecipe,
} from './favoriteSlice';

export default function Favorite({ elem }) {
  const [isFavExists, setIsFavExists] = React.useState(false);
  const dispatch = useDispatch();
  const favRecipe = useSelector(selectFavRecipe);

  const setAsFavorite = () => {
    const isFavExistsFind = favRecipe.find((favElem) => favElem.id === elem.id);
    if (isFavExistsFind) {
      dispatch(removeFavRecipe(elem.id));
      setIsFavExists(false);
    } else {
      dispatch(addFavRecipe(elem));
      setIsFavExists(true);
    }
  };
  return (
    <div css={css``}>
      <Button onClick={setAsFavorite}>
        {isFavExists ? <FaHeart /> : <FaRegHeart />}
      </Button>
    </div>
  );
}
