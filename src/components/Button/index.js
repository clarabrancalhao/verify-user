import React from 'react';
import { Button } from './styles';

const PatternButton = (props) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default PatternButton;
