/** @jsx jsx */
import React from 'react';
import axios from 'axios';
import { css, jsx } from '@emotion/core';
import { FaHeart, FaRegSmileBeam, FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import CircleLoader from 'react-spinners/CircleLoader';
import Container from '../containers/Container';
import homeImage from '../assets/img/monika-grabkowska.jpg';
import { RECIPES_URL } from '../constants';
import {
  mq,
  flexCenter,
  iconPink,
  textWarning,
  flexEvenly,
} from '../utils/customStyles';
import { Link } from 'react-router-dom';

export default function Home() {
  const [query, setQuery] = React.useState('');
  const [queryOnFocus, setQueryOnFocus] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipeSearch, setRecipeSearch] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (query.length <= 2) {
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.get(`${RECIPES_URL}?q=${query}`);
        setRecipeSearch(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [query]);

  const setQueryInput = (e) => {
    const inputVal = e.target.value;

    setQuery(inputVal);
    if (inputVal.length <= 2) {
      setQueryOnFocus(true);
    } else {
      setQueryOnFocus(false);
    }
  };

  const clearInputSearch = () => {
    setRecipeSearch([]);
    setQuery('');
    setQueryOnFocus(false);
  };

  return (
    <Container>
      <h1
        css={{
          margin: '15px 0 0',
          fontSize: 24,
          textAlign: 'center',
          [mq()[1]]: {
            fontSize: 30,
            textAlign: 'initial',
          },
        }}
      >
        Tastalonia - the way into recipes
      </h1>

      <section
        css={css`
          text-align: center;
        `}
      >
        <p
          css={css`
            margin: 50px 0 10px;
          `}
        >
          Today's most voted recipe:
        </p>
        <div
          css={{
            width: '80%',
            margin: '0 auto',
            [mq()[2]]: {
              width: '100%',
            },
          }}
        >
          <img
            css={css`
              max-width: 100%;
              height: auto;
            `}
            src={homeImage}
            alt='most voted'
          />
          <p
            css={css`
              ${flexCenter};
            `}
          >
            <i
              css={css`
                display: flex;
                margin-right: 5px;
                ${iconPink}
              `}
            >
              <FaHeart />
            </i>
            396
          </p>
          <p>
            Created by <a href='https://unsplash.com/@moniqa'>Monika</a>{' '}
            <FaRegSmileBeam />
          </p>
        </div>
      </section>

      <form>
        <p
          css={css`
            margin-bottom: 10px;
          `}
        >
          Search for your favorite recipes:{' '}
        </p>
        <label
          css={css`
            border: 1px solid #42cc8c;
            padding: 7px;
            border-radius: 10px;
          `}
        >
          <i
            css={css`
              margin-right: 5px;
              color: rgba(0, 0, 0, 0.5);
            `}
          >
            <FaSearch />
          </i>
          <input
            type='text'
            value={query}
            placeholder='Search for recipes...'
            onChange={setQueryInput}
            onBlur={setQueryInput}
            css={css`
              border: 0;
              height: 25px;
              &::placeholder {
                color: #42cc8c;
                font-weight: bold;
              }
            `}
          />
        </label>

        {recipeSearch.length > 0 ? (
          <span
            onClick={clearInputSearch}
            role='button'
            tabIndex='0'
            onKeyDown={clearInputSearch}
            css={css`
              margin-left: 10px;
              border-radius: 5px;
              color: #fff;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 5px;
              cursor: pointer;
            `}
          >
            Clear search
            <i>
              <MdClose />
            </i>
          </span>
        ) : null}
      </form>

      <section>
        {error && (
          <p
            css={css`
              ${textWarning}
            `}
          >
            Error searching, please try again later...
          </p>
        )}

        {recipeSearch.length === 0 && query.length >= 3 && (
          <p>No recipes for criteria {query}, try something else...</p>
        )}

        {queryOnFocus && <p>Enter more that 2 characters to begin search...</p>}

        {isLoading ? (
          <div
            css={css`
              ${flexCenter}
            `}
          >
            <CircleLoader size={100} color={'#42cc8c'} />
          </div>
        ) : (
          <div
            css={css`
              ${flexEvenly}
            `}
          >
            {recipeSearch.map((elem) => {
              return (
                <Link to={`/recipes/${elem.id}`} key={elem.id}>
                  <figure>
                    <img
                      css={css`
                        width: 300px;
                        height: 300px;
                      `}
                      src={elem.image}
                      alt={elem.name}
                    />
                    <figcaption>{elem.name}</figcaption>
                  </figure>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </Container>
  );
}
