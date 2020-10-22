import React from 'react';
import theme from '../../../styles/theme-overrides.js';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Link, Card } from '@material-ui/core';

const LearnCard = styled(Card)`
  width: 20%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10% 40%;
  padding: 2%;

  @media (max-width: 1024px) {
    width: 40%;
    margin: 10% 30%;
  }

  @media (max-width: 600px) {
    width: 60%;
    margin: 20%;
  }
`;

const LearnModal = () => {
  return (
    <ThemeProvider theme={theme}>
      <LearnCard>
        <Typography variant="h4">
          <Link href="https://www.bridgestoprosperity.org/why-bridges/">
            Why Bridges?
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link href="https://www.bridgestoprosperity.org/global-work/">
            Global Work
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link href="https://www.bridgestoprosperity.org/our-approach/">
            Our Approach
          </Link>
        </Typography>

        <br></br>

        <Typography variant="h4">Who We Are</Typography>

        <ul style={{ listStyleType: 'none' }}>
          <Typography variant="h4">
            <li>
              <Link href="https://www.bridgestoprosperity.org/who-we-are/team/">
                Team
              </Link>
            </li>
          </Typography>
          <Typography variant="h4">
            <li>
              <Link href="https://www.bridgestoprosperity.org/who-we-are/board/">
                Board
              </Link>
            </li>
          </Typography>
          <Typography variant="h4">
            <li>
              <Link href="https://www.bridgestoprosperity.org/join-us/">
                Join Us
              </Link>
            </li>
          </Typography>
        </ul>
      </LearnCard>
    </ThemeProvider>
  );
};

export default LearnModal;
