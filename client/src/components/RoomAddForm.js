import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

const RoomForm = ({ id, room, setRoom }) => {

    const onFinish = async (values) => {
        await fetch(`/api/rooms`, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(values),
        })
        console.log('Success:', values);
        window.location.reload();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Nom"
            name="name"
            rules={[
            {
                required: true,
                message: "Merci d'entrer le nom de la chambre",
            },
            ]}
        >
            <Input name='name' />
        </Form.Item>

        <Form.Item
            label="Capacité Max"
            name="maxPersons"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input type='number' name='maxPersons'  />
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Ajouter
            </Button>
        </Form.Item>
        </Form>
    );
};

export default RoomForm