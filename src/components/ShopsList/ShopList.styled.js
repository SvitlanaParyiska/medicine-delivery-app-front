import styled from 'styled-components';

export const ShopsListStyled = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  width: 150px;
  align-items: center;
  padding: 10px 20px;
  transition: var(--transition);

  &:hover,
  &:focus {
    border-radius: 8px;
    background-color: var(--color-accent);
  }

  &.active {
    border-radius: 8px;
    background-color: var(--color-accent);
    border: 1px solid #262f34;
  }
`;
