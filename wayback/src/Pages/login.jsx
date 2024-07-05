import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body.modal-open {
        overflow: hidden;
        position: relative;
        &:before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f8f9fa;
`;

const Modal = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 20px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    margin-bottom: 25px;
    padding: 8px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
`;

const Label = styled.label`
    align-self: flex-start;
    margin-bottom: 5px;
    font-size: 16px; 
`;

const Button = styled.button`
    width: 10%;
    padding: 10px;
    background: white;
    color: black;
    border: 1px solid #000;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: white;
        text-decoration: underline;
    }
`;

const LoginButton = styled.button`
    width: 50%;
    padding: 10px;
    background: white;
    color: black;
    border: 1px solid #000;
    cursor: pointer;
    text-decoration: none;
    margin-top: 30px;

    &:hover {
        background: white;
        text-decoration: underline;
    }
`;

const Heading = styled.div`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
`;

const Login = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setShowModal(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        document.body.classList.remove('modal-open');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 api 연동

        handleCloseModal();
        navigate('/home'); // 로그인 후 이동할 페이지
    };

    return (
        <Container>
            <GlobalStyle />
            <Button onClick={handleOpenModal}>로그인</Button>
            <Modal show={showModal}>
                <Heading>Wayback</Heading>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="username">아이디</Label>
                    <Input id="username" type="text"/>
                    <Label htmlFor="password">비밀번호</Label>
                    <Input id="password" type="password" />
                    <LoginButton type="submit">로그인</LoginButton>
                </Form>
            </Modal>
        </Container>
    );
    
};

export default Login;