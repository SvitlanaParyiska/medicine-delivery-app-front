import styled from 'styled-components';

export const GridBox = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1440px) {
    grid-template-columns: 300px 1fr;
  }
`;
