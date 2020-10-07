import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
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
            Bridge Name: {selectedBridge.selectedBridge.properties.bridge_name}
          </h3>
          <h3>
            Province: {selectedBridge.selectedBridge.properties.province_name}
          </h3>
          <h3>
            District: {selectedBridge.selectedBridge.properties.district_name}
          </h3>
          <h3>
            Project Stage:{' '}
            {selectedBridge.selectedBridge.properties.project_stage}
          </h3>
          <h3>
            Project Code:{' '}
            {selectedBridge.selectedBridge.properties.project_code}
          </h3>
          <h3>
            Bridge Type: {selectedBridge.selectedBridge.properties.bridge_type}
          </h3>
          <h3>
            Individuals Served:{' '}
            {selectedBridge.selectedBridge.properties.individuals_served}
          </h3>
        </StyledDiv>
      ) : (
        <StyledDiv>no selected bridge</StyledDiv>
      )}
    </StyledCard>
  );
};

export default InfoBox;
