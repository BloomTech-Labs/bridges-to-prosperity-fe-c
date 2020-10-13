import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraphPage = (props) => {
  const prop = { ...props }
  const bridgeData = prop.props.props 
  console.log(bridgeData)
  const trace1 = {
    y: [5500, 200, 3302,],
    x: ['Total Population','Total Served', 'Growth',],
    type: 'bar',
    name:'Population Effect'
  }
  const trace2 = {
    y: [500, 3300, 302,],
    x: ['Total Population','Total Served', 'Growth',],
    type: 'bar',
    name:'Economic Effect'
  }
  const data = [trace1,trace2]
  const layout = {
    width:450,
    height: 350,
    title:`Bridge Name: ${bridgeData.bridge_name} `,
    font: { size: 11 },
    showlegend:true
  };

  return (
    <Plot data={data} layout={layout} config={{
      displayModeBar: false,
      responsive: true,
      fillFrame: true,

    }} />
  );
};

export default RenderGraphPage;
