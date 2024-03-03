import styled from 'styled-components';

export const DrugsBox = styled.div`
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #262f34;
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

  > ul {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
