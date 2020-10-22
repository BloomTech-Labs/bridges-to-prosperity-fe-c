import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

const StyledCard = styled(Paper)`
  width: 100%;
  display: flex;
  margin: 1%;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// creates array for table component
function createData({ properties }) {
  return [
    { category: 'Project Code', data: properties.project_code },
    { category: 'Bridge Name', data: properties.bridge_site_name },
    { category: 'Bridge Type', data: properties.bridge_type },
    { category: 'District', data: properties.district },
    { category: 'Province', data: properties.province },
    { category: 'Project Stage', data: properties.project_stage },
    { category: 'Latitude', data: properties.latitude },
    { category: 'Longitude', data: properties.longitude },
    {
      category: 'Individuals Directly Served',
      data: properties.individuals_directly_served,
    },
    { category: 'Assessment Date', data: properties.assessment_date },
    { category: 'Sector', data: properties.sector },
    { category: 'Cell', data: properties.cell },
  ];
}

// returns a table containing selected bridge information, utilizes createData
const InfoBox = ({ selectedBridge }) => {
  let rows = [];
  if (selectedBridge) {
    rows = createData(selectedBridge);
  }
  return (
    <StyledCard elevation={15}>
      {/* Returns table component if a bridge has been selected */}
      {selectedBridge ? (
        <TableContainer component={StyledDiv}>
          <Table className={StyledTableRow.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Bridge Information</StyledTableCell>

                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <Typography variant="body1">{row.category}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="body1">{row.data}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div></div>
      )}
    </StyledCard>
  );
};

export default InfoBox;
