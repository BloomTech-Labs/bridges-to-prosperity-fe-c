import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraphPage = (props) => {
  const prop = { ...props }
  const bridgeData =prop.props.props 
  const trace1 = {
    y: [1, 2, 3, 4],
    x: ['hell', 'tell', 'jail', 'bail'],
    type: 'bar',
    name:'bellDell'
  }
  const data = [trace1]
  const titleB = ()=>{}
  const layout = {}
    width:450,
    height: 350,
    title: titleB,
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
