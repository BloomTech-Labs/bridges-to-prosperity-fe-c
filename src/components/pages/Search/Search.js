import React, { useState, useContext } from 'react';
import {
  ContextSearchData,
  ContextView,
  ContextStatus,
  ContextOpen,
} from '../Store';
import * as d3 from 'd3';
import { FlyToInterpolator } from 'react-map-gl';
import './Search.css';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 15%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 5% 42.5%;

  @media (max-width: 1024px) {
    width: 30%;
    margin: 5% 35%;
  }
  @media (max-width: 600px) {
    width: 45%;
    margin: 5% 27.5%;
  }
`;

const Search = () => {
  const [searchData, setSearchData] = useContext(ContextSearchData);
  const [filterDataList, setFilterDataList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [status, setStatus] = useContext(ContextStatus);
  const [viewport, setViewport] = useContext(ContextView);
  const [open, setOpen] = useContext(ContextOpen);
  const dataList = searchData;

  //List everything to exclude with filtering
  const exclude = [
    'after_img',
    'before_img',
    'prov_id',
    'district_id',
    'sector_id',
    'cell_id',
    'original_community_col',
    'indviduals_directly_served',
    'asssessment-date',
  ];

  //filter function for filtering search data out of dataList
  const filterData = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === '') setFilterDataList([]);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key => {
          return exclude.includes(key)
            ? false
            : item[key]
                .toString()
                .toLowerCase()
                .includes(lowercasedValue);
        });
      });
      setFilterDataList(filteredData);
    }
  };

  //Handle change for search box
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // flies to selected bridge
  const FlyTo = () => {
    const flyViewport = {
      latitude: lat,
      longitude: long,
      zoom: 15,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubic,
    };
    setViewport(flyViewport);
    setOpen(false);
  };

  const setCoord = (lat, long) => {
    setLat(lat);
    setLong(long);
  };

  return (
    <StyledCard>
      {/* search bar */}
      <div className="searchbar">
        <input
          style={{ margin: 15 }}
          type="text"
          placeholder="Type to search..."
          value={searchText}
          onChange={e => handleChange(e.target.value)}
        />
      </div>

      {/* Container for rendering search data */}
      <div className="bridgeCard-container">
        {filterDataList.map((d, i) => {
          return (
            <div
              className="bridgeCard"
              key={i}
              onMouseEnter={() => setCoord(d.latitude, d.longitude)}
              onClick={() => {
                setCoord(d.latitude, d.longitude);
                FlyTo();
                setStatus(d.project_stage);
              }}
            >
              <b>Bridge Name: </b>
              {d.bridge_site_name}
              <br />
              <b>Project Code: </b>
              {d.project_code}
              <br />
              <b>Poject Stage: </b>
              {d.project_stage}
              <br />
            </div>
          );
        })}
      </div>
    </StyledCard>
  );
};

export default Search;
