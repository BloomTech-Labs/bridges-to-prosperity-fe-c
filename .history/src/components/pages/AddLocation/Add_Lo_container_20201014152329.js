import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const FormContainer = styled.div`
    box-shadow:0 0 2px black;
    margin:4% auto;
    width:90%;

`

export default function Add_Lo_container() {
    
    return (
        <FormContainer>
            <Form>
                <Form.Item
                    sty
                >
                    <Input/>
                </Form.Item>
            </Form>
        </FormContainer>
    )
}
