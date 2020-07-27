/**@jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { useParams } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import axios from 'axios';
import { RECIPES_URL } from '../../constants';
import Container from '../../containers/Container';
import Favorite from '../../features/favorite/Favorite';
import { textWarning, flexCenter, flexEvenly } from '../../utils/customStyles';

export default function SingleRecipe() {
  let { id } = useParams();

  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipe, setRecipe] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${RECIPES_URL}/${id}`);
        setRecipe([response.data]);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <h1>Recipe information</h1>

      {error && (
        <p
          css={css`
            ${textWarning}
          `}
        >
          Error fetching recipes, please try again later...
        </p>
      )}

      {isLoading ? (
        <div
          css={css`
            ${flexCenter}
          `}
        >
          <CircleLoader size={100} color={'#42cc8c'} />
        </div>
      ) : (
        <section>
          {recipe.map((elem) => (
            <div key={elem.id}>
              <div
                css={css`
                  ${flexEvenly} align-items: center;
                `}
              >
                <div>
                  <img src={elem.image} alt={elem.name} />
                  <p>{elem.name}</p>
                </div>
                <div>
                  <p>Ingredients:</p>
                  <ul>
                    {elem.ingredients.map((elemIng, i) => (
                      <li
                        key={i}
                        css={css`
                          margin: 10px 0;
                        `}
                      >
                        {elemIng}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>{elem.text}</p>
              {/* deliberately using redux toolkit for fav recipes */}
              <Favorite elem={elem} />
            </div>
          ))}
          {/* TODO: Why 4 console.log() statement */}
          {/* {console.log(recipe)} */}
        </section>
      )}
    </Container>
  );
}
