import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import Green from './PatternBlue.png';

const StyledPaper = styled.img`
  width: 100vw;
  heigth: 100vh;
  margin: 0;
  padding: 0;
  top: 10vh;
`;

const Pattern = () => {
  return (
    <>
      <StyledPaper src={Green} />
    </>
  );
};

export default Pattern;
