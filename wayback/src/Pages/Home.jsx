import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f8f9fa;
`;

const Button = styled.button`
    padding: 10px;
    margin: 10px;
    width: 150px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignClick = () => {
    navigate('/sign');
  };

  const handleTextEditClick = () => {
    navigate('/textedit');
  }

  return (
    <Container>
      <Button onClick={handleLoginClick}>로그인</Button>
      <Button onClick={handleSignClick}>회원가입</Button>
      <Button onClick={handleTextEditClick}>텍스트 에디터</Button>
    </Container>
  );
};

export default Home;