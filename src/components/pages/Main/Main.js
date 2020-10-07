import React from 'react';
import { Layout } from 'antd';
import './Main.css';
import Map from '../Map/Map';
import Store from '../Store';
import ImageBox from '../ImageBox/ImageBox';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  margin-left: 10%;
  margin-top: 10%;
  width: 35%;
  height: 55vh;
`;

//destructing components out of Layout component
const { Content } = Layout;

const Main = () => {
  // return (
  //   <div>
  //     {/* <Layout> */}
  //       <Store>
  //         {/* <Layout className="layout">
  //           <Content className="content">
  //             <Map />
  //           </Content>
  //         </Layout> */}
  //         <StyledCard>
  //           <Map />
  //         </StyledCard>
  //       </Store>
  //     {/* </Layout> */}
  //   </div>
  // );
  return (
    <StyledDiv>
      <Store>
        <Map />
      </Store>
    </StyledDiv>
  );
};

export default Main;
