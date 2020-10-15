import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraphPage = (props) => {
  console.log(props)
  const data = [
    {
      type: 'bar',
      : [1, 2, 3, 4],
      x: ['tisha', 'kisha', 'lisa', 'lauren'],
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5,
        },
      },
    },
  ];

  const layout = {
    width:500,
    height: 350,
    title: 'hello',
    font: { size: 11 },
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
