import React, { useState } from 'react';
import theme from '../../../styles/theme-overrides.js';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Fade, Slide, Link, Button } from '@material-ui/core';

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 25px;
  position: relative;
  justify-content: space-between;
`;

const HomeDiv = styled.div`
  display: flex;
  padding: 25px;
`;

const TestDiv = styled.div`
  position: absolute;
  background-color: #66c3e3;
  width: 100%;
  height: 10vh;
`;

const TestDivTwo = styled.div`
  position: absolute;
  background-color: white;
  width: 25%;
  height: 10vh;
`;

const TestDivThree = styled.div`
  position: absolute;
  background-color: white;
  width: 25%;
  height: 10vh;
  margin-left: 25%;
`;

const TestDivFour = styled.div`
  position: absolute;
  background-color: white;
  width: 25%;
  height: 10vh;
  margin-left: 50%;
`;

const TestDivFive = styled.div`
  position: absolute;
  background-color: white;
  width: 25%;
  height: 10vh;
  margin-left: 75%;
`;

const InfoDiv = styled.div`
  display: flex;
  width: 40%;
  position: relative;
`;

const SmallIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const InfoLink = styled(Link)`
  position: relative;
  width: 25%;
  height: 10vh;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 8vh;
`;

theme.typography.h3 = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#161345',
};

const NavBar = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [infoOver, setInfoOver] = useState(false);
  const [partnerOver, setPartnerOver] = useState(false);
  const [actionOver, setActionOver] = useState(false);
  const [donateOver, setDonateOver] = useState(false);
  const handleChange = () => {
    setMouseOver(prev => !prev);
  };
  const handleInfoOver = () => {
    setInfoOver(prev => !prev);
  };
  const handlePartnerOver = () => {
    setPartnerOver(prev => !prev);
  };
  const handleActionOver = () => {
    setActionOver(prev => !prev);
  };
  const handleDonateOver = () => {
    setDonateOver(prev => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      {/* div is the whole nav bar */}
      <StyledDiv onMouseEnter={handleChange} onMouseLeave={handleChange}>
        <Slide in={mouseOver} direction="right">
          {/* testdiv is the blue background */}
          <TestDiv></TestDiv>
        </Slide>
        {/* styleddiv is the logo div */}
        <StyledDiv id="nav_div">
          <HomeDiv>
            <Link href="http://www.bridgestoprosperity.org" underline="none">
              <SmallIcon src="favicon.ico" />
            </Link>
            <Link href="http://www.bridgestoprosperity.org" underline="none">
              <Typography variant="h3">Bridges to Prosperity</Typography>
            </Link>
          </HomeDiv>
        </StyledDiv>

        <InfoDiv>
          <Slide in={infoOver} direction="down">
            <TestDivTwo></TestDivTwo>
          </Slide>
          <InfoLink onMouseEnter={handleInfoOver} onMouseLeave={handleInfoOver}>
            <Typography variant="h3" align="center">
              Learn
            </Typography>
          </InfoLink>
          <Slide in={partnerOver} direction="down">
            <TestDivThree></TestDivThree>
          </Slide>
          <InfoLink
            onMouseEnter={handlePartnerOver}
            onMouseLeave={handlePartnerOver}
          >
            <Typography variant="h3" align="center">
              Partner
            </Typography>
          </InfoLink>
          <Slide in={actionOver} direction="down">
            <TestDivFour></TestDivFour>
          </Slide>
          <InfoLink
            onMouseEnter={handleActionOver}
            onMouseLeave={handleActionOver}
          >
            <Typography variant="h3" align="center">
              Take Action
            </Typography>
          </InfoLink>
          <InfoLink
            onMouseEnter={handleDonateOver}
            onMouseLeave={handleDonateOver}
            style={{
              padding: '1%',
            }}
          >
            <StyledButton variant="contained" color="primary">
              Donate
            </StyledButton>
          </InfoLink>
        </InfoDiv>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default NavBar;
