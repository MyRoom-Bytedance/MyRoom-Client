/** 
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:37:14
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 19:43:39
 * @FilePath     : \myroom-client\src\pages\Login\index.tsx
 * @Description  : 登录&注册页
 */

import React, { useState } from 'react';
import { Form, Input, Button, AutoCenter, Toast } from 'antd-mobile';
import styled from 'styled-components';
import { FormInstance } from 'antd-mobile/es/components/form';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUserCache } from 'redux/userSlice';


export const Login = React.memo(() => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formType, setFormType] = useState<'login' | 'register'>('login');
    const formInstance = Form.useForm()[0];

    const onFinish = async (values: any) => {
        console.log(values);
        await new Promise(r => setTimeout(r, 1000));
        if (formType === 'login') {
            // 使用redux记录 userInfo （token在userInfo中）
            dispatch(setUserCache({
                username: values.username,
                password: values.password
            }));
            Toast.show('登陆成功');
            navigate('/');
        }
    }

    return (
        <Container>
            <AutoCenter>
                <h1>客户子系统{formType === 'login' ? '登录' : '注册'}</h1>
            </AutoCenter>
            <Form
                form={formInstance}
                className='form'
                onFinish={onFinish}
                footer={formType === 'login' ? LoginFooter(setFormType) : RegisterFooter(setFormType)}
            >
                {formType === 'login' ? LoginItems : RegisterItems(formInstance)}
            </Form>
        </Container>
    );
});

const LoginItems = <>
    <Form.Item
        name='username'
        label='用户名'
        rules={[{ required: true, message: '姓名不能为空' }]}
    >
        <Input placeholder='请输入用户名' clearable />
    </Form.Item>
    <Form.Item
        name='password'
        label='密码'
        rules={[{ required: true, message: '密码不能为空' }]}
    >
        <Input placeholder='请输入密码' clearable type='password' />
    </Form.Item>
</>

const LoginFooter = (changer: Function) => <>
    <p className='tooltip'>
        未注册？
        <span className='primary' onClick={() => changer('register')}>点击这里</span>
        注册账号
    </p>
    <Button block type='submit' color='primary' size='large'>
        提交
    </Button>
</>

const RegisterItems = (form: FormInstance) => <>
    <Form.Item
        name='username'
        label='用户名'
        rules={[{ required: true, message: '姓名不能为空' }]}
    >
        <Input placeholder='请输入用户名' clearable />
    </Form.Item>
    <Form.Item
        name='password'
        label='密码'
        rules={[{ required: true, message: '密码不能为空' }]}
    >
        <Input placeholder='请输入密码' clearable type='password' />
    </Form.Item>
    <Form.Item
        name='confirm'
        label='确认密码'
        rules={[{ validator: (_, v) => form.getFieldValue('password') === v ? Promise.resolve() : Promise.reject('密码不一致！') }]}
    >
        <Input placeholder='请确认密码' clearable type='password' />
    </Form.Item>
</>

const RegisterFooter = (changer: Function) => <>
    <p className='tooltip'>
        注册过了？
        <span className='primary' onClick={() => changer('login')}>点击这里</span>
        登录账号
    </p>
    <Button block type='submit' color='primary' size='large'>
        提交
    </Button>
</>

const Container = styled.div`
    padding: 16px;

    .primary {
        color: var(--adm-color-primary)
    }

    .tooltip {
        margin-bottom: 16px;
        text-align: right;
    }
`