import React, { useState, useRef } from 'react';
import { Form, Input, InputNumber, Button, Modal, DatePicker } from 'antd';
import { CircularProgress } from '@material-ui/core';
import Axios, { a } from 'axios';

import 'antd/dist/antd.css';
import styled from 'styled-components';
import { FormatClearSharp } from '@material-ui/icons';

const FormContainer = styled.div`
  box-shadow: 0 0 2px black;
  margin: 4% auto;
  width: 90%;
  background: lightgrey;
  text-align: center;
  padding: 3%;
`;

export default function Add_Lo_container() {
  const [showForm, setShow] = useState(false);
  const formSub = useRef();
  const [adding, setAdding] = useState(false);
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState(null);
  const [results, setResults] = useState();

  const stringWidth = '70%';

  const formSubmit = item => {
    // const postData = { ...item, assesment_date: formData.d };
    console.log(item);
    Axios.post('https://labs27-c-bridges-api.herokuapp.com/bridges', item)
      .then(res => {
        console.log(res.data);
        setResults('complete');
        setAdding(true);

        setTimeout(() => {
          setComplete(true);
        }, 600);

        setTimeout(() => {
          setShow(false);
          setComplete(false);
          setAdding(false);
        }, 1250);
      })
      .catch(err => {
        console.log(err);
        setAdding(true);
        setResults('Complete');

        setTimeout(() => {
          setComplete(true);
        }, 600);
        setTimeout(() => {
          setShow(false);
          setComplete(false);
          setAdding(false);
        }, 1250);
      });
  };

  return (
    <div>
      {showForm !== true ? (
        <button
          onClick={() => {
            setShow(!showForm);
          }}
        >
          Add New Location
        </button>
      ) : (
        <Modal
          visible={showForm}
          onCancel={() => setShow(false)}
          onOk={() => formSub.current.submit()}
        >
          <FormContainer>
            {/* adding animation control */}
            {adding ? (
              <div>
                {complete == false ? (
                  //   If adding show circular progress for loading
                  <CircularProgress />
                ) : (
                  <h2>{results}</h2>
                )}
              </div>
            ) : (
              <div>
                <h4>Add A Location</h4>
                <Form
                  ref={formSub}
                  onFinish={item => formSubmit(item)}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  {/* bridge Name */}
                  {/* <Form.Item
                    label="Bridge Name"
                    name="bridge_name"
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter A Bridge Name',
                      },
                    ]}
                  > */}
                  {/* <Input style={{ width: stringWidth }} />
                  </Form.Item> */}
                  {/* project code */}
                  <Form.Item
                    label="Project Code"
                    name="project_code"
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter A Project Code',
                      },
                    ]}
                  >
                    <InputNumber style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* longitude */}
                  <Form.Item
                    label="Longitude"
                    name="longitude"
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter A Longitude',
                      },
                    ]}
                  >
                    <InputNumber style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Latitude */}
                  <Form.Item
                    label="Latitude"
                    name="latitude"
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter A Latitude',
                      },
                    ]}
                  >
                    <InputNumber style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Province */}
                  <Form.Item label="Province" name="province">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* District */}
                  <Form.Item label="District" name="district">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Sector */}
                  <Form.Item label="Sector" name="sector">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Cell */}
                  <Form.Item label="Cell" name="cell">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Bridge Site */}
                  <Form.Item label="Bridge Site" name="bridge_site_name">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Project Stage */}
                  <Form.Item label="Project Stage" name="project_stage">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Bridge Type */}
                  <Form.Item label="Bridge Type" name="bridge_type">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Individuals directly serverd */}
                  <Form.Item
                    label="Individuals Directly Served"
                    name="individuals_directly_served"
                  >
                    <InputNumber style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Assesment Date */}
                  <Form.Item label="Assesment Date" name="assesment_data">
                    <DatePicker onChange={data => setFormData(data)} />
                  </Form.Item>
                  {/* Community Served */}
                  <Form.Item label="Community Served" name="community_served">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Prov Id */}
                  <Form.Item label="Providence Id" name="prov_id">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Sector id */}
                  <Form.Item label="Sector" name="sector_id">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* District id */}
                  <Form.Item label="District Id" name="district_id">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                  {/* Cell Id */}
                  <Form.Item label="Cell Id" name="cell_id">
                    <Input style={{ width: stringWidth }} />
                  </Form.Item>
                </Form>
              </div>
            )}
          </FormContainer>
        </Modal>
      )}
    </div>
  );
}
