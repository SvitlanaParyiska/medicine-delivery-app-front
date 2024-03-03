import styled from 'styled-components';

export const CartLi = styled.li`
  width: 70%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  > div {
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
        0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    }
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  margin-bottom: 0;
`;

export const SvgFavAdd = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--color-secondary);
  stroke: var(--color-secondary);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--color-accent);
    stroke: var(--color-accent);
  }
`;
