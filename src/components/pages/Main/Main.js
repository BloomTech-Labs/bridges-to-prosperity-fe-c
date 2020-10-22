import React from 'react';
import './Main.css';
import Map from '../Map/Map';
import Store from '../Store';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';

const StyledDiv = styled.div`
  display: flex;
`;

const WholeDiv = styled.div`
  display: flex;
  flex-flow: column;
`;

const Main = () => {
  return (
    <WholeDiv>
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
