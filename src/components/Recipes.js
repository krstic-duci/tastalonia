/** @jsx jsx */
import React from 'react';
import axios from 'axios';
import { jsx, css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';
import Container from '../containers/Container';
import { useGet } from '../utils/customHooks';
import { buttonPrimary, flexCenter } from '../utils/customStyles';
import { RECIPES_URL } from '../constants';

export default function Recipes() {
  const [startshowMore, setStartShowMore] = React.useState(0);
  const [endShowMore, setEndShowMore] = React.useState(10);
  const [response, setResponse] = React.useState(null);
  const [recipes, setRecipes] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      console.log('called useEffect');
      try {
        const response = await axios.get(
          `${RECIPES_URL}?_start=${startshowMore}&_end=${endShowMore}&_limit=10`,
        );
        setResponse(response);
        setIsLoading(false);
        // console.log('called try inside useEffect');
        // console.log(response, 'RESPONSE');
        // let recipeTmp = [...recipes, ...response.data];
        // console.log(recipeTmp);
        setRecipes(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    return () => {
      setRecipes([]);
    };
  }, [startshowMore, endShowMore]);

  const loadMoreRecipes = () => {
    if (startshowMore == 66) {
      return;
    }
    // FIXME: start and end must be dynamic
    // setStartShowMore(startshowMore + 11);
    // setEndShowMore(endShowMore + 10);
  };
  return (
    <Container>
      <h1>Recipes</h1>
      {error ? (
        <p>Error fetching recipes, please try again later...</p>
      ) : isLoading ? (
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
      )}
      <button css={buttonPrimary} onClick={loadMoreRecipes}>
        Show more
      </button>
    </Container>
  );
}
