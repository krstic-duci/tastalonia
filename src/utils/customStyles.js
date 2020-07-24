/**@jsx jsx */
import { jsx, css } from '@emotion/core';

export function mq() {
  const breakpoints = [1200, 992, 768, 576];
  return breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
}

export const primaryColor = css`
  color: #483c32;
`;

export const btnBgColor = css`
  background-color: #42cc8c;
`;

export const headerLink = css`
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 300;
  transition: color 0.3s ease-in;
  &:hover {
    color: #708090;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexEvenly = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const buttonPrimary = css`
  padding: 10px 15px;
  border-radius: 2em;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`;

export const enabledButton = css`
  ${btnBgColor};
  border: 1px solid transparent;
  color: #ffffff;
  cursor: pointer;
  transition: border 0.2s;
  &:hover {
    border: 1px solid #483c32;
  }
`;

export const disabledButton = css`
  cursor: not-allowed;
  border: 0;
  background-color: rgba(66, 204, 140, 0.5);
  ${primaryColor};
`;

export const textWarning = css`
  color: red;
`;

export const Button = (props) => (
  <button
    css={css`
      ${buttonPrimary};
      ${props.loadmore == 'true' ? disabledButton : enabledButton}
    `}
    {...props}
  >
    {props.children}
  </button>
);
