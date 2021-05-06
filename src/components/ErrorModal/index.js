import React from 'react';

import Card from '../Card/index';
import Button from '../Button/index';
import { Footer, Header, Container, Backdrop } from './styles';

const ErrorModal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onConfirm} />
      <Card isModal>
        <Header>
          <h2>{props.title}</h2>
        </Header>

        <Container>
          <p>{props.message}</p>
        </Container>
        <Footer>
          <Button onClick={props.onConfirm}>Ok</Button>
        </Footer>
      </Card>
    </>
  );
};

export default ErrorModal;
