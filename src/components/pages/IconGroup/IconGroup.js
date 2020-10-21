import React, { useContext, useState, useEffect } from 'react';
import { ContextStatus, ContextOpen } from '../Store';
import { Card, Modal, Backdrop } from '@material-ui/core';
import Search from '../Search/Search';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 0 30% 10px;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 0 15% 10px;
  }
  @media (max-width: 600px) {
    height: 20vh;
  }
`;

const IconDiv = styled.div`
  display: flex;
  flex-flow: row;

  @media (max-width: 600px) {
    flex-flow: column;
    justify-content: space-between;
  }
`;

const IconGroup = () => {
  const [status, setStatus] = useContext(ContextStatus);
  const [open, setOpen] = useContext(ContextOpen);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', listener);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Search />
      </Modal>
      <StyledCard>
        {/* Change Search Bar into a button that pops out a modal for search */}
        {/* <Search /> */}

        <IconDiv>
          <div>
            <div className="iconBox">
              <div className="icons">
                <img
                  src="search-icon.png"
                  alt=""
                  onClick={() => {
                    handleOpen();
                  }}
                />
              Search
            </div>
              <div className="icons" value={'Complete'}>
                <img
                  src="bridge-icon.png"
                  alt=""
                  onClick={() => {
                    setStatus('Complete');
                  }}
                />
              Completed
            </div>
              <div className="icons">
                <img
                  src="construction-icon.png"
                  alt=""
                  onClick={() => {
                    setStatus('Under Construction');
                  }}
                />
              Under Construction
            </div>
              <div className="icons">
                <img
                  src="checked-icon.png"
                  alt=""
                  onClick={() => {
                    setStatus('Confirmed');
                  }}
                />
              Confirmed
            </div>
            </div>
          </div>
          <div>
            <div className="iconBox">
              <div className="icons">
                <img
                  src="binoculars-icon.png"
                  alt=""
                  onClick={() => {
                    setStatus('Prospecting');
                  }}
                />
              Prospecting
            </div>
              <div className="icons">
                <img
                  src="detective-icon.png"
                  alt=""
                  onClick={() => {
                    setStatus('Identified');
                  }}
                />
              Identified
            </div>
              <div className="icons">
                <img
                  src="rejected-icon.png"
                  alt=""
                  onClick={() => {
                    setStatus('Rejected');
                  }}
                />
              Rejected
            </div>
            </div>
          </div>
        </IconDiv>
      </StyledCard>
    </>
  );
};

export default IconGroup;
