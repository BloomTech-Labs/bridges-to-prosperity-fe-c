import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraphPage = (props) => {
  console.log(props)
  const trace1 = {
    x: [1, 2, 3, 4],
    y: ['hell', 'tell', 'jail', 'bail'],
    type: 'bar',
    name:'bellDell'
  }
  const data = 
  ];

  const layout = {
    width:300,
    height: 350,
    title: 'hello',
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
