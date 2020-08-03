/** @jsx jsx */
import React from 'react';
import axios from 'axios';
import { jsx, css } from '@emotion/core';
import { useRouteMatch, Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import Container from '../containers/Container';
import {
  Button,
  flexCenter,
  textWarning,
  flexEvenly,
} from '../utils/customStyles';
import { RECIPES_URL } from '../constants';

export default function Recipes() {
  const match = useRouteMatch();
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [posY, setPosY] = React.useState(0);
  const [startShowMore, setStartShowMore] = React.useState(0);
  const [endShowMore, setEndShowMore] = React.useState(10);
  const [totalRecipes, setTotalRecipes] = React.useState(0);
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${RECIPES_URL}?_start=${startShowMore}&_end=${endShowMore}`,
        );
        // TODO: Missing dependency recipes
        setRecipes([...recipes, ...response.data]);
        setTotalRecipes(response.headers['x-total-count']);
        setIsLoading(false);

        window.scrollTo(0, posY);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [startShowMore, endShowMore, posY]);

  const loadMoreRecipes = () => {
    if (endShowMore == totalRecipes) {
      return;
    }

    setPosY(window.scrollY);

    startShowMore == 0
      ? setStartShowMore(startShowMore + 11)
      : setStartShowMore(startShowMore + 10);
    totalRecipes - endShowMore < 10
      ? setEndShowMore(totalRecipes)
      : setEndShowMore(endShowMore + 10);
  };
  return (
    <Container>
      <h1>Recipes</h1>
      {error ? (
        <p
          css={css`
            ${textWarning}
          `}
        >
          Error fetching recipes, please try again later...
        </p>
      ) : isLoading ? (
        <div
          css={css`
            ${flexCenter}
            margin: 100px 0;
          `}
        >
          <CircleLoader size={100} color={'#42cc8c'} />
        </div>
      ) : (
        <section
          css={css`
            ${flexEvenly}
          `}
        >
          {recipes.map((elem) => (
            <Link
              key={elem.id}
              to={`${match.url}/${elem.id}`}
              css={css`
                margin-bottom: 50px;
                text-decoration: none;
                transition: transform 0.3s linear;
                transform: translateY(0);
                border-radius: 10px;
                &:hover {
                  transform: translateY(-10px);
                  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                }
              `}
            >
              <figure
                css={css`
                  margin: 0;
                `}
              >
                <img
                  css={css`
                    width: 300px;
                    height: 300px;
                  `}
                  src={elem.image}
                  alt={elem.name}
                />
                <figcaption
                  css={css`
                    margin-top: 8px;
                    padding: 5px;
                  `}
                >
                  {elem.name}
                </figcaption>
              </figure>
            </Link>
          ))}
        </section>
      )}
      <div
        css={css`
          text-align: center;
        `}
      >
        <Button
          onClick={loadMoreRecipes}
          loadmore={(endShowMore == totalRecipes).toString()}
        >
          Show more
        </Button>
      </div>
    </Container>
  );
}
