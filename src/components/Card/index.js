import React from 'react';
import { Container } from './styles';

const Card = (props) => {
  return <Container isModal={props.isModal}>{props.children}</Container>;
};

export default Card;
