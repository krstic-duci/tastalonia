import { css } from '@emotion/core';

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

export const buttonPrimary = css`
  padding: 10px 15px;
  border-radius: 2em;
  text-decoration: none;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  border: 1px solid transparent;
  ${btnBgColor};
  text-align: center;
  transition: all 0.2s;
  &:hover {
    border: 1px solid #483c32;
  }
`;
