import React from 'react';
import theme from '../../../styles/theme-overrides.js';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Fade, Slide, Link, Button, Card } from '@material-ui/core';

const PartnerCard = styled(Card)`
  width: 20%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10% 40%;
  padding: 2%;
`;

const PartnerModal = () => {
  return (
    <ThemeProvider theme={theme}>
      <PartnerCard>
        <Typography variant="h4">
          <Link href="https://www.bridgestoprosperity.org/foundations/">
            Foundations
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link href="https://www.bridgestoprosperity.org/corporate/">
            Corporate
          </Link>
        </Typography>
      </PartnerCard>
    </ThemeProvider>
  );
};

export default PartnerModal;
