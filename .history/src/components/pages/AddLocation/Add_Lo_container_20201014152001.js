import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const FormContainer = styled.div`

`

export default function Add_Lo_container() {
    
    return (
        <div>
            <Form>
                <Form.Item>
                    <Input/>
                </Form.Item>
            </Form>
        </div>
    )
}
