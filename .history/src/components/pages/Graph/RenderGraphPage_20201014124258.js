import React,{useEffect,useState} from 'react';
import Plot from 'react-plotly.js';
import { gsap } from 'gsap'
import { CircularProgress } from '@material-ui/core';
const RenderGraphPage = (props) => {

  const prop = { ...props };
  const bridgeData = prop.props.props;
  console.log(bridgeData);
  const trace1 = {
    y: [5500, 200, 3302,],
    x: ['Total Population', 'Total Served', 'Growth',],
    type: 'bar',
    name: 'Social Effect'
  };
  const trace2 = {
    y: [500, 3300, 302,],
    x: ['Total Population', 'Total Served', 'Growth',],
    type: 'bar',
    name: 'Economic Effect'
  };
  const trace3 = {
    y: [5200, 3320, 3602,],
    x: ['Total Population', 'Total Served', 'Growth',],
    type: 'bar',
    name: 'Economic Effect'
  };
  const data = [trace1,trace2,trace3]
  const layout = {
    width:490,
    height: 320,
    title:`Bridge Name: ${bridgeData.bridge_name} `,
    font: { size: 13 },
    showlegend:true
  };

  cons

  useEffect(() => {
    gsap.from('.graph',.8, { opacity: 0 ,ease:'expo-out'});
    
  }, [bridgeData]);

  return (

    <Plot className='graph'  data={data} layout={layout} config={{
      displayModeBar: false,
      responsive: true,
      fillFrame: true,

    }} />
  );
};

export default RenderGraphPage;
