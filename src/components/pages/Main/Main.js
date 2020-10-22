import React from 'react';
import { Layout } from 'antd';
import './Main.css';
import Map from '../Map/Map';
import Store from '../Store';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';

const StyledDiv = styled.div`
  display: flex;
`;

const WholeDiv = styled.div`
  display: flex;
  flex-flow: column;
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
    <WholeDiv>
      <NavBar />
      <StyledDiv>
        <Store>
          <Map />
        </Store>
      </StyledDiv>
    </WholeDiv>
  );
};

export default Main;
