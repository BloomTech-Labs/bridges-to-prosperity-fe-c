import React from 'react';
import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ContactSupportOutlined } from '@material-ui/icons';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
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

const StyledCard = styled(Card)`
  width: 100%;
  display: flex;
  margin: 1% 0 0 0;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const InfoBox = ({ selectedBridge }) => {
  console.log(selectedBridge, 'selected bridge');
  let rows = [];
  // selectedBridge
  //   ? selectedBridge.selectedBridge.properties.keys().forEach(category => {
  //       rows.push({ [category]: selectedBridge.properties[category] });
  //     })
  //   : console.log(selectedBridge);
  if (selectedBridge) {
    rows = createData(selectedBridge);
    console.log(selectedBridge, rows);
  }
  return (
    <StyledCard>
      {selectedBridge ? (
        <TableContainer component={StyledDiv}>
          <Table className={StyledTableRow.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Category</StyledTableCell>

                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.data}</StyledTableCell>
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
