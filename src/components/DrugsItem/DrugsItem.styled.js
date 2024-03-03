import styled from 'styled-components';

export const DrugItem = styled.li`
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const BtnFav = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  position: absolute;
  top: 10px;
  right: 14px;
`;

export const SvgFav = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--color-accent);
  fill: none;
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--color-accent);
  }
`;

export const SvgFavAdd = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--color-accent);
  stroke: var(--color-accent);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--color-accent);
    stroke: var(--color-accent);
  }
`;
