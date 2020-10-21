import React, { useState}from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const FormContainer = styled.div`
    box-shadow:0 0 2px black;
    margin:4% auto;
    width:90%;
    text-align:center;

`

export default function Add_Lo_container() {
const [showForm,setShow] =useState(true)

    
    return (
        <div>
            {
            showForm !== true ?11
                    <button onClick={()=>setShow(!showForm)}>

                    </button>
            :

        <FormContainer>
        <h4>Add A Location</h4>
            <Form>
                <Form.Item
                    label="Bridge Name"
                    name="Bridge Name"
                    rules={[
                    {
                        required: true,
                        message: 'Please Enter A Bridge Name',
                    },
                    ]}
                >
                    <Input style={{width:'20rem'}}/>
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
                    <Input style={{width:'20rem'}}/>
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
                    <Input style={{width:'20rem'}}/>
                </Form.Item>
            
            </Form>
        </FormContainer>
            }
            
        </div>
    )
}
