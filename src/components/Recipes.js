/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';
import Container from '../containers/Container';
import { useGet } from '../utils/customHooks';
import { buttonPrimary, flexCenter } from '../utils/customStyles';
import { RECIPES_URL } from '../constants';

export default function Recipes() {
  const [showMore, setShowMore] = React.useState(0);
  // const [recipes, setRecipes] = React.useState([]);
  const recipesObj = useGet(
    `${RECIPES_URL}awdasdfagf?_startawd=0&_limit=10`,
    {},
  );
  if (!recipesObj.response) {
    return <CircleLoader size={100} color={'#42cc8c'} />;
  }
  // let recipes = recipesObj.response.data;
  // let recipes = [];
  const loadMoreRecipes = () => {
    if (showMore == 66) {
      return;
    }
    setShowMore(showMore + 1);
  };
  return (
    <Container>
      <h1>Recipes</h1>
      {/* {recipesObj.error ? (
        <p>Error fetching recipes, please try again later...</p>
      ) : recipesObj.isLoading ? (
        <div
          css={css`
            ${flexCenter}
          `}
        >
          <CircleLoader size={100} color={'#42cc8c'} />
        </div>
      ) : (
        <section>
          {recipes.map((elem) => (
            <div key={elem.id}>
              <p>{elem.name}</p>
            </div>
          ))}
        </section>
      )} */}
      <button css={buttonPrimary}>Show more</button>
    </Container>
  );
}
