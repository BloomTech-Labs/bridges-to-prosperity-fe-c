import React from 'react';
import { Card } from '@material-ui/core';
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
          <h3>
            Bridge Name:{' '}
            {selectedBridge.selectedBridge.properties.bridge_site_name}
          </h3>
          <h3>Province: {selectedBridge.selectedBridge.properties.province}</h3>
          <h3>District: {selectedBridge.selectedBridge.properties.district}</h3>
          <h3>
            Project Stage:{' '}
            {selectedBridge.selectedBridge.properties.project_stage}
          </h3>
          <h3>
            Bridge Type: {selectedBridge.selectedBridge.properties.bridge_type}
          </h3>
          <h3>
            Project Code:{' '}
            {selectedBridge.selectedBridge.properties.project_code}
          </h3>
          Sector: {selectedBridge.selectedBridge.properties.sector}
          <h3>
            Individuals Served:{' '}
            {
              selectedBridge.selectedBridge.properties
                .individuals_directly_served
            }
          </h3>
          <h3>
            Communities Served:{' '}
            {selectedBridge.selectedBridge.properties.original_community_col}
          </h3>
          <h3>
            Date Assessed:{' '}
            {selectedBridge.selectedBridge.properties.assessment_date}
          </h3>
          <h3>Cell: {selectedBridge.selectedBridge.properties.cell}</h3>
          <h3>Provence ID: {selectedBridge.selectedBridge.prov_id}</h3>
          <h3>District ID: {selectedBridge.selectedBridge.district_id}</h3>
          <h3>Cell ID: {selectedBridge.selectedBridge.cell_id}</h3>
          <h3>Longitude: {selectedBridge.selectedBridge.longitude}</h3>
          <h3>Latitude: {selectedBridge.selectedBridge.latitude}</h3>
        </StyledDiv>
      ) : (
        <StyledDiv>no selected bridge</StyledDiv>
      )}
    </StyledCard>
  );
};

export default InfoBox;
