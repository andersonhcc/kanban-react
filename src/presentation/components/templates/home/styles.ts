import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  min-height: calc(100% - 80px);
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`