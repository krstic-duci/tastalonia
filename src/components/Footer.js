/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default function Footer() {
  return (
    <footer
      css={css`
        text-align: center;
      `}
    >
      <p>
        Copyright by <em>@Creative fish</em>
      </p>
      <p>All rights reserved.</p>
    </footer>
  );
}
