import styled from 'styled-components';

export const CartListBox = styled.div`
  height: 500px;
  overflow: auto;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #262f34;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 14px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;
