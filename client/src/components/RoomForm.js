import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router';

const RoomForm = ({ id, room, setRoom }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState()

    useEffect(() => {
        setValues(room)
    }, [room, id])

    const onFinish = async (values) => {
        await fetch(`/api/rooms/${id}`, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'PATCH',
            body: JSON.stringify(values),
        })
        console.log('Success:', values);
        setRoom(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = event => {
        const { values, name } = event.target
        setValues({ ...values, [name]: name })
    }

    const handleDelete = async () => {
        await fetch(`/api/rooms/${id}`, {
            method: 'DELETE'
        })
        navigate('/rooms')
    }

    if (!values) return null

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
            <Input value={values.name} name='name' onClick={handleChange} />
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
            <Input value={values.maxPersons} type='number' name='maxPersons'  onClick={handleChange} />
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <Button onClick={handleDelete} type="danger" style={{marginLeft: 10}}>
                Supprimer
            </Button>
        </Form.Item>
        </Form>
    );
};

export default RoomForm