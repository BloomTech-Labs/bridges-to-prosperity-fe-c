import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import axios from 'axios';
import './mapbox-gl.css';
import Tooltip from '@material-ui/core/Tooltip';
import { Drawer } from 'antd';
import ImageBox from '../ImageBox/ImageBox';
import InfoBox from '../InfoBox/InfoBox';
import IconGroup from '../IconGroup/IconGroup';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import bg from '../../../bg.png';
import bg3 from '../../../bg3.png';

import {
  Context,
  ContextStatus,
  ContextStyle,
  ContextMargin,
  ContextSearchData,
  ContextLong,
  ContextLat,
  ContextView,
} from '../Store';
import './map.css';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Footer from '../Footer/Footer';

const InfoContainer = styled.div`
  width: 35%;
  margin-left: 5%;
  padding: 1% 5% 1% 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
`;

const MapContainer = styled.div`
  width: 50%;
  margin: 0 5% 0 5%;
  padding: 1%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: space-between;
  background-image: url(${bg3});
`;

const BigContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

let test = {
  geometry: {
    type: 'Point',
    coordinates: [-2.2280555, 29.573334],
  },
  properties: {
    bridge_image: 'Waiting on Data',
    bridge_name: 'Serugeme',
    bridge_type: 'Suspended',
    district_id: 26,
    district_name: 'Ruhango',
    id: 1042,
    individuals_served: 4111,
    project_code: 1012480,
    project_stage: 'Complete',
    province_id: 2,
    province_name: 'Southern Province',
  },
};

const Map = () => {
  const mapRef = useRef();

  const handleViewportChange = useCallback(
    newViewport => setViewport(newViewport),
    []
  );

  const showDrawer = () => {
    // if (visible === true) setVisible(false);
    if (visible === false) setVisible(true);
  };

  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  //state of longitude and latitude for fly to function
  const [long, setLong] = useContext(ContextLong);
  const [lat, setLat] = useContext(ContextLat);

  //initial state of view when the map first renders
  const [viewport, setViewport] = useContext(ContextView);

  //initial data that it pulled in from web-endpoint
  const [data, setData] = useState([]);

  //data passed to search bar in map component
  const [searchData, setSearchData] = useContext(ContextSearchData);

  //state of currently clicked on bridge marker
  const [selectedBridge, setSelectedBridge] = useState(test);

  //state of selected bridge passed to Sidebar
  const [state, setState] = useContext(Context);

  //toggle state for changing view to satellite
  const [toggle, setToggle] = useState(false);

  //state for filtering bridge by project status
  const [status, setStatus] = useContext(ContextStatus);

  //state for changing the map style attribute
  const [style, setStyle] = useContext(ContextStyle);

  //margin state for moving the button that controls the sidebar
  const [collapseMargin, setCollapseMargin] = useContext(ContextMargin);

  //array that all the bridge data is pushed to before formatted to GeoJson
  const array = [];

  //hits endpoint and gets all bridges
  useEffect(() => {
    axios
      .get('https://b2ptc.herokuapp.com/bridges')
      .then(response => {
        response.data.map(element => {
          //pushes every element to array variable
          array.push(element);
        });
        setData(array);
        setSearchData(array);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Function to toggle map style state with toggle switch
  const mapStyle = () => {
    if (style === 'mapbox://styles/simonh24/ckfykq5h60cox19qp2zfrjfm7')
      setStyle('mapbox://styles/simonh24/ckfykuza40crt19jozsgoypyg');

    if (style === 'mapbox://styles/simonh24/ckfykuza40crt19jozsgoypyg')
      setStyle('mapbox://styles/simonh24/ckfykq5h60cox19qp2zfrjfm7');
  };

  //function to convert json data to geojson
  var bridge = {
    type: 'FeatureCollection',
    features: [],
  };

  for (let i = 0; i < data.length; i++) {
    //if statement filters bridges based on status
    if (data[i].project_stage === status) {
      bridge.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [data[i].latitude, data[i].longitude],
        },
        properties: {
          id: data[i].id,
          project_code: data[i].project_code,
          bridge_name: data[i].bridge_name,
          bridge_type: data[i].bridge_type,
          district_id: data[i].district_id,
          district_name: data[i].district_name,
          province_id: data[i].province_id,
          province_name: data[i].province_name,
          project_stage: data[i].project_stage,
          individuals_served: data[i].individuals_served,
          bridge_image: data[i].bridge_image,
        },
      });
    }
  }

  // allows user to press "ESC" key to exit popup
  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === 'Escape') {
  //       setSelectedBridge(null);
  //     }
  //   };
  //   window.addEventListener('keydown', listener);
  // }, []);

  return (
    <BigContainer>
      <InfoContainer>
        <IconGroup />
        <ImageBox selectedBridge={selectedBridge} />
        <InfoBox selectedBridge={selectedBridge} />
      </InfoContainer>
      <MapContainer>
        <Card>
          <ReactMapGL
            ref={mapRef}
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            //Style of the map. Initial state set in Context store
            mapStyle={style}
            //enable dragging
            onViewportChange={handleViewportChange}
          >
            {/* <div className="sidebar">
            <LeftSideBar />
          </div> */}
            {/* Maps through all the data in bridges.json grabbing lat and lon to display markers */}
            {bridge.features.map(bridge => (
              <Marker
                key={bridge.properties.id}
                latitude={bridge.geometry.coordinates[0]}
                longitude={bridge.geometry.coordinates[1]}
              >
                {/* image used to display point on map */}
                <Tooltip
                  title={
                    <h2 style={{ color: 'white', margin: 'auto' }}>
                      {bridge.properties.bridge_name}
                    </h2>
                  }
                  arrow
                  placement="top"
                >
                  <img
                    className="marker-btn"
                    src={`${bridge.properties.project_stage}.png`}
                    alt="bridge icon"
                    onClick={e => {
                      e.preventDefault();
                      setSelectedBridge(bridge);
                      setState({ bridge });
                      showDrawer();
                      console.log(selectedBridge);
                    }}
                  />
                </Tooltip>
              </Marker>
            ))}

            {/* <div className="footerHolder">
              <Footer />
            </div> */}
            {/* controls for zooming in and out*/}
            <div className="zoom-controls">
              <NavigationControl
                showZoom={true}
                showCompass={true}
                showFullscreen={true}
              />
            </div>
            {/* Toggle view to satellite and regular view */}
            <div
              className="mini-view"
              onClick={() => {
                setToggle(!toggle);
                mapStyle();
              }}
            >
              {toggle ? (
                <div className="sat-button">
                  <img className="satellite" src="./mapButton.png" />
                </div>
              ) : (
                <div className="nav-button">
                  <img className="satellite" src="./satelliteButton.png" />
                </div>
              )}
            </div>

            {/* <Drawer
            className="infoDrawer"
            title={<h2>Bridge Info</h2>}
            drawerStyle={{ backgroundColor: 'white' }}
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
            mask={false}
            maskClosable={true}
            overflow={false}
          >
            <h3>Bridge Name: {state.bridge.properties.bridge_name}</h3>
            <h3>Province: {state.bridge.properties.province_name}</h3>
            <h3>District: {state.bridge.properties.district_name}</h3>
            <h3>Project Stage: {state.bridge.properties.project_stage}</h3>
            <h3>Project Code: {state.bridge.properties.project_code}</h3>
            <h3>Bridge Type: {state.bridge.properties.bridge_type}</h3>
            <h3>
              Individuals Served: {state.bridge.properties.individuals_served}
            </h3>
          </Drawer> */}
          </ReactMapGL>
        </Card>
      </MapContainer>
    </BigContainer>
  );
};

export default Map;
