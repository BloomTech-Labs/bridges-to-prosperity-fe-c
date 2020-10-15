import React, { useState,useRef}from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { CircularProgress } from '@material-ui/core';

import 'antd/dist/antd.css';
import styled from 'styled-components'

const FormContainer = styled.div`
    box-shadow:0 0 2px black;
    margin:4% auto;
    width:90%;
    background:lightgrey;
    text-align:center;
    padding:3%;
    /* position:absolute; */
    /* top:60%; */

`

export default function Add_Lo_container() {
    const [showForm, setShow] = useState(false);
    const formSub = useRef();
    const [adding, setAdding] = useState(false);
    const [complete,setComplete]= useState(false)

    const formSubmit = (item) => {
        console.log(item);
        setAdding(true);

        setTimeout(() => {
            setComplete(true);


        }, 600);
        

        setTimeout(() => {
            setShow(false)
        },950)
            
    }
    




    
    return (
        <div>
            {
            showForm !== true ?
                    <button onClick={() => {
                        setShow(!showForm);
                    }}>
                        Add New Location

                    </button>
                    :
                    <Modal
                        visible={showForm}
                        onCancel={() => setShow(false)}
                        onOk={() =>formSub.current.submit()}
                    >
                    
                 
                        <FormContainer>
                            {adding ?
                                <div>
                                    {
                                        complete == false ?
                                            <CircularProgress />
                                            :
                                            <div>yougotit</div>
                                    }
                                
                                </div>
                                :
                                <div>
                                    <h4>Add A Location</h4>
                                    <Form
                                        ref={formSub}
                                        onFinish={item => formSubmit(item)}
                                
                                    >
                                        <Form.Item
                                            label="Bridge Name"
                                            name="bridge_name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please Enter A Bridge Name',
                                                },
                                            ]}
                                        >
                                            <Input style={{ width: '20rem' }} />
                                        </Form.Item>

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
                                            <Input style={{ width: '20rem' }} />
                                        </Form.Item>

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
                                            <Input style={{ width: '20rem' }} />
                                        </Form.Item>
                        
                                    </Form>
                    

                                </div>
                            
                            }
                        </FormContainer>
            </Modal>
            }
            
        </div>
    )
}
