/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { CircleLoader } from 'react-spinners';
import { FaHeart, FaRegSmileBeam } from 'react-icons/fa';
import Container from '../containers/Container';
import { useGet } from '../utils/customHooks';
import { IMAGE_URL } from '../constants';
import { mq, flexCenter } from '../utils/customStyles';

export default function Home() {
  const imageUnsplash = useGet(IMAGE_URL, {});

  const section = () => {
    if (imageUnsplash.error) {
      return (
        <p
          css={css`
            color: red;
          `}
        >
          Error fetching, please try again later...
        </p>
      );
    } else if (imageUnsplash.isLoading) {
      return (
        <div
          css={css`
            ${flexCenter}
          `}
        >
          <CircleLoader size={100} color={'#42cc8c'} />
        </div>
      );
    } else {
      return (
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
          <div>
            <img src={IMAGE_URL} alt='most voted' />
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
              Created by Duconka <FaRegSmileBeam />
            </p>
          </div>
        </section>
      );
    }
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

      {section()}
    </Container>
  );
}
