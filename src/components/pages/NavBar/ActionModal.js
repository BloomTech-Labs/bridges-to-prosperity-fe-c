import React from 'react';
import theme from '../../../styles/theme-overrides.js';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Link, Card } from '@material-ui/core';

const ActionCard = styled(Card)`
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

const ActionModal = () => {
  return (
    <ThemeProvider theme={theme}>
      <ActionCard>
        <Typography variant="h4">
          <Link href="https://www.bridgestoprosperity.org/donate/">Donate</Link>
        </Typography>
        <Typography variant="h4">
          <Link href="https://www.bridgestoprosperity.org/donate/bridge-builder-circle/">
            Bridge Builder Circle
          </Link>
        </Typography>
      </ActionCard>
    </ThemeProvider>
  );
};

export default ActionModal;
