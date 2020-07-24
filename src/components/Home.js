/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FaHeart, FaRegSmileBeam } from 'react-icons/fa';
import Container from '../containers/Container';
import homeImage from '../assets/img/monika-grabkowska.jpg';
import { mq, flexCenter } from '../utils/customStyles';

export default function Home() {
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
        <div css={{
            width: '80%',
            margin: '0 auto',
            [mq()[2]]: {
              width: '100%'
            },
        }}>
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
                color: #ffc0cb;
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
    </Container>
  );
}
