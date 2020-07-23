/**@jsx jsx */
import { jsx } from '@emotion/core';
import { mq } from '../utils/customStyles';

export default function Container({ children }) {
  return (
    <main
      css={{
        minHeight: '100vh',
        paddingTop: '70px',
        margin: '0 auto',
        [mq()[3]]: {
          maxWidth: '540px',
        },
        [mq()[2]]: {
          maxWidth: '720px',
        },
        [mq()[1]]: {
          maxWidth: '960px',
        },
        [mq()[0]]: {
          maxWidth: '1140px',
        },
      }}
    >
      {children}
    </main>
  );
}
