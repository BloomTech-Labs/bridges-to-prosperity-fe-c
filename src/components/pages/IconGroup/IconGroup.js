import React, { useContext, useEffect } from 'react';
import { ContextStatus, ContextOpen } from '../Store';
import { Paper, Modal, Backdrop } from '@material-ui/core';
import Search from '../Search/Search';
import styled from 'styled-components';
import './IconGroup.css';

// Styled Components
const StyledCard = styled(Paper)`
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
      {/* Search Modal */}
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
      {/* All icons */}
      <StyledCard elevation={0}>
        <IconDiv>
          <div>
            <div className="iconBox">
              <div
                className="icons"
                onClick={() => {
                  handleOpen();
                }}
              >
                <img src="search-icon.png" alt="" />
                Search
              </div>
              <div
                className="icons"
                value={'Complete'}
                onClick={() => {
                  setStatus('Complete');
                }}
              >
                <img src="bridge-icon.png" alt="" />
                Completed
              </div>
              <div
                className="icons"
                onClick={() => {
                  setStatus('Under Construction');
                }}
              >
                <img src="construction-icon.png" alt="" />
                Under Construction
              </div>
              <div
                className="icons"
                onClick={() => {
                  setStatus('Confirmed');
                }}
              >
                <img src="checked-icon.png" alt="" />
                Confirmed
              </div>
            </div>
          </div>
          <div>
            <div
              className="iconBox"
              onClick={() => {
                setStatus('Prospecting');
              }}
            >
              <div className="icons">
                <img src="binoculars-icon.png" alt="" />
                Prospecting
              </div>
              <div
                className="icons"
                onClick={() => {
                  setStatus('Identified');
                }}
              >
                <img src="detective-icon.png" alt="" />
                Identified
              </div>
              <div
                className="icons"
                onClick={() => {
                  setStatus('Rejected');
                }}
              >
                <img src="rejected-icon.png" alt="" />
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
