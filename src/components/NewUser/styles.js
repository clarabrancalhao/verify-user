import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-weight: bold;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;

export const Input = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: #4f005f;
  }
`;
