import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: white;
  margin: 2rem auto;
  padding: 1rem;
  width: ${(props) => (props.isModal ? '80%' : '90%')};
  max-width: ${(props) => (props.isModal ? '36rem' : '40rem')};

  ${(props) =>
    props.isModal &&
    css`
      position: fixed;
      top: 30vh;
      left: 10%;
      z-index: 100;
      overflow: hidden;

      @media (min-width: 768px) {
        left: calc(50% - 18rem);
        max-width: 36rem;
      }
    `}
`;
