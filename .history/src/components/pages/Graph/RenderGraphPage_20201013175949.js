import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraphPage = (props) => {
  const prop = { ...props }
  const bridgeData = prop.props.props 
  console.log(bridgeData)
  const trace1 = {
    y: [1, 2, 3, 4],
    x: ['total Population', '', 'jail',],
    type: 'bar',
    name:'Population Served'
  }
  const data = [trace1]
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
