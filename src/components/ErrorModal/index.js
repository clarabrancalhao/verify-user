import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/index';
import Button from '../Button/index';
import { Footer, Header, Container, Backdrop } from './styles';

const BackdropRoot = (props) => {
  return <Backdrop onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropRoot onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
