import React from 'react';
import { Card, Typography } from '@material-ui/core';
import theme from '../../../styles/theme-overrides.js';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 100%;
  height: 27.5vh;
  display: flex;
  margin: 10% 0 0 10%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px;
`;

const InfoBox = selectedBridge => {
  return (
    <StyledCard>
      {selectedBridge.selectedBridge ? (
        <StyledDiv>
          <Typography variant="h4">
            Bridge Name:{' '}
            {selectedBridge.selectedBridge.properties.bridge_site_name}
          </Typography>
          <Typography variant="h4">
            Province: {selectedBridge.selectedBridge.properties.province}
          </Typography>
          <Typography variant="h4">
            District: {selectedBridge.selectedBridge.properties.district}
          </Typography>
          <Typography variant="h4">
            Project Stage:{' '}
            {selectedBridge.selectedBridge.properties.project_stage}
          </Typography>
          <Typography variant="h4">
            Bridge Type: {selectedBridge.selectedBridge.properties.bridge_type}
          </Typography>
          <Typography variant="h4">
            Project Code:{' '}
            {selectedBridge.selectedBridge.properties.project_code}
          </Typography>
          Sector: {selectedBridge.selectedBridge.properties.sector}
          <Typography variant="h4">
            Individuals Served:{' '}
            {
              selectedBridge.selectedBridge.properties
                .individuals_directly_served
            }
          </Typography>
          <Typography variant="h4">
            Communities Served:{' '}
            {selectedBridge.selectedBridge.properties.original_community_col}
          </Typography>
          <Typography variant="h4">
            Date Assessed:{' '}
            {selectedBridge.selectedBridge.properties.assessment_date}
          </Typography>
          <Typography variant="h4">
            Cell: {selectedBridge.selectedBridge.properties.cell}
          </Typography>
          <Typography variant="h4">
            Provence ID: {selectedBridge.selectedBridge.prov_id}
          </Typography>
          <Typography variant="h4">
            District ID: {selectedBridge.selectedBridge.district_id}
          </Typography>
          <Typography variant="h4">
            Cell ID: {selectedBridge.selectedBridge.cell_id}
          </Typography>
          <Typography variant="h4">
            Longitude: {selectedBridge.selectedBridge.longitude}
          </Typography>
          <Typography variant="h4">
            Latitude: {selectedBridge.selectedBridge.latitude}
          </Typography>
        </StyledDiv>
      ) : (
        <StyledDiv>no selected bridge</StyledDiv>
      )}
    </StyledCard>
  );
};

export default InfoBox;
