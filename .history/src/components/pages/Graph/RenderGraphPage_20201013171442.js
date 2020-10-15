import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraphPage = (props) => {
  console.log(props)
  const data = [
    {
      type: 'bar',
      x: ['gate', 2, 3, 4],
      y: [5, 10, 2, 8],
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5,
        },
      },
    },
  ];

  const layout = {
    width: 300,
    height: 250,
    title: 'hello',
    font: { size: 11 },
  };

  return (
    <Plot data={data} layout={layout} config={{ displayModeBar: false }} />
  );
};

export default RenderGraphPage;
