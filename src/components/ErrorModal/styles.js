import styled from 'styled-components';

export const Header = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

export const Container = styled.div`
  padding: 1rem;
`;

export const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
