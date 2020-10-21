import React from 'react';
import { Layout } from 'antd';
import './Main.css';
import Map from '../Map/Map';
import Store from '../Store';
import ImageBox from '../ImageBox/ImageBox';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';
import Blue from './PatternMixed.svg';

const StyledDiv = styled.div`
  display: flex;
`;

const WholeDiv = styled.div`
  display: flex;
  flex-flow: column;
`;

//destructing components out of Layout component
const { Content } = Layout;

const Main = () => {
  return (
    <WholeDiv
      style={{
        backgroundImage: `url(${Blue})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <NavBar />
      <StyledDiv>
        <Store>
          <Map />
        </Store>
      </StyledDiv>
    </WholeDiv>
  );
};

export default Main;
