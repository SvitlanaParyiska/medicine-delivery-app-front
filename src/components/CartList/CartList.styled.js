import styled from 'styled-components';

export const CartListBox = styled.div`
  width: 100%;
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
`;
