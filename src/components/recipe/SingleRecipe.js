/**@jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { useParams } from 'react-router-dom';
import CircleLoader from 'react-spinners';
import axios from 'axios';
import { RECIPES_URL } from '../../constants';
import Container from '../../containers/Container';
import { textWarning, flexCenter } from '../../utils/customStyles';

export default function SingleRecipe() {
  let { id } = useParams();

  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipe, setRecipe] = React.useState([]);

  // FIXME: react problem
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(`${RECIPES_URL}/${id}`);
  //       console.log(response);
  //       // setRecipe(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <Container>
      <h1>Single recipe</h1>
      {error ? (
        <p
          css={css`
            ${textWarning}
          `}
        >
          Error fetching recipes, please try again later...
        </p>
      ) : null}
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
          {/* {recipe.map((elem, i) => (
            <div key={i}>
              <p>{elem.name}</p>
            </div>
          ))} */}
          Duleaka
        </section>
      )}
    </Container>
  );
}
