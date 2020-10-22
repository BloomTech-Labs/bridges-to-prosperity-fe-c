import React, { useState } from 'react';
import theme from '../../../styles/theme-overrides.js';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Typography,
  Slide,
  Link,
  Button,
  Modal,
  Backdrop,
} from '@material-ui/core';
import LearnModal from './LearnModal';
import PartnerModal from './PartnerModal';
import ActionModal from './ActionModal';

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const HomeDiv = styled.div`
  display: flex;
  padding: 25px;
`;

const SlidingBackground = styled.div`
  position: absolute;
  background-color: #66c3e3;
  width: 100%;
  height: 10vh;

  @media (max-width: 600px) {
    height: 50vh;
  }
`;

const LinkHoverBackground = styled.div`
  position: absolute;
  background-color: white;
  width: 25%;
  height: 10vh;
  border-radius: 20px;

  @media (max-width: 600px) {
    visibility: hidden;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  width: 40%;
  position: relative;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  padding: 3.5% 0;

  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
    width: 50%;
    height: auto;
  }
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

theme.typography.h4 = {
  fontSize: '1.4rem',
  fontWeight: 600,
  color: '#161345',
};

const NavBar = () => {
  // State for mousing over the navbar
  const [mouseOver, setMouseOver] = useState(false);

  // State for mousing over the Learn link
  const [infoOver, setInfoOver] = useState(false);

  // State for mousing over the Partner link
  const [partnerOver, setPartnerOver] = useState(false);

  // State for mousing over the Action link
  const [actionOver, setActionOver] = useState(false);

  // State for opening the Learn modal
  const [openInfo, setOpenInfo] = useState(false);

  // State for opening the Partner modal
  const [openPartner, setOpenPartner] = useState(false);

  // State for opening the Action modal
  const [openAction, setOpenAction] = useState(false);

  // Handler for mousing over the navbar
  const handleChange = () => {
    setMouseOver(prev => !prev);
  };

  // Handler for mousing over the Learn link
  const handleInfoOver = () => {
    setInfoOver(prev => !prev);
  };

  // Handler for opening the Learn modal
  const handleLearnClick = () => {
    setOpenInfo(prev => !prev);
    setMouseOver(prev => !prev);
  };

  // Handler for mousing over the Partner link
  const handlePartnerOver = () => {
    setPartnerOver(prev => !prev);
  };

  // Handler for opening the Partner modal
  const handlePartnerClick = () => {
    setOpenPartner(prev => !prev);
    setMouseOver(prev => !prev);
  };

  // Handler for mousing over the Action link
  const handleActionOver = () => {
    setActionOver(prev => !prev);
  };

  //Handler for opening the Action modal
  const handleActionClick = () => {
    setOpenAction(prev => !prev);
    setMouseOver(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv
        onMouseEnter={handleChange}
        onMouseLeave={handleChange}
        id="big_nav"
      >
        <Slide in={mouseOver} direction="right">
          <SlidingBackground></SlidingBackground>
        </Slide>
        <StyledDiv id="nav_div">
          <HomeDiv>
            <Link href="http://www.bridgestoprosperity.org" underline="none">
              <SmallIcon src="favicon.ico" />
            </Link>
            <Link href="http://www.bridgestoprosperity.org" underline="none">
              <Typography
                variant="h3"
                style={{
                  color: mouseOver ? 'white' : '#161345',
                }}
              >
                Bridges to Prosperity
              </Typography>
            </Link>
          </HomeDiv>
        </StyledDiv>

        <InfoDiv>
          <Slide in={infoOver} direction="down">
            <LinkHoverBackground></LinkHoverBackground>
          </Slide>
          <InfoLink
            onMouseEnter={handleInfoOver}
            onMouseLeave={handleInfoOver}
            onClick={handleLearnClick}
          >
            <Typography variant="h4" align="center">
              Learn
            </Typography>
          </InfoLink>
          <Modal
            open={openInfo}
            onClose={handleLearnClick}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <LearnModal />
          </Modal>
          <Slide in={partnerOver} direction="down">
            <LinkHoverBackground
              style={{
                marginLeft: '25%',
              }}
            ></LinkHoverBackground>
          </Slide>
          <InfoLink
            onMouseEnter={handlePartnerOver}
            onMouseLeave={handlePartnerOver}
            onClick={handlePartnerClick}
          >
            <Typography variant="h4" align="center">
              Partner
            </Typography>
          </InfoLink>
          <Modal
            open={openPartner}
            onClose={handlePartnerClick}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <PartnerModal />
          </Modal>
          <Slide in={actionOver} direction="down">
            <LinkHoverBackground
              style={{
                marginLeft: '50%',
              }}
            ></LinkHoverBackground>
          </Slide>
          <InfoLink
            onMouseEnter={handleActionOver}
            onMouseLeave={handleActionOver}
            onClick={handleActionClick}
          >
            <Typography variant="h4" align="center">
              Take Action
            </Typography>
          </InfoLink>
          <Modal
            open={openAction}
            onClose={handleActionClick}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <ActionModal />
          </Modal>
          <InfoLink
            style={{
              padding: '1%',
            }}
          >
            <StyledButton
              variant="contained"
              color="primary"
              href="https://www.bridgestoprosperity.org/donate/"
            >
              Donate
            </StyledButton>
          </InfoLink>
        </InfoDiv>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default NavBar;

// ****The information below is for building out a button to the /gallery route. It is functional, but clashed with the current styling****

{
  /* <Slide in={galleryOver} direction="down">
            <TestDivTwo></TestDivTwo>
          </Slide>
          <InfoLink
            onMouseEnter={handleGalleryOver}
            onMouseLeave={handleGalleryOver}
          >
            <Typography variant="h4" align="center">
              <Link href="/gallery" onClick="/gallery">
                Gallery
              </Link>
            </Typography>
          </InfoLink>
          <Slide in={partnerOver} direction="down">
            <TestDivTwo */
}
{
  /* // style={{
            //   marginRight: '25%',
            // }} */
}
{
  /* ></TestDivTwo>
          </Slide>
          <Slide in={infoOver} direction="down">
            <TestDivTwo></TestDivTwo>
          </Slide> */
}
