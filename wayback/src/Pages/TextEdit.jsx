import React, { useState } from 'react';
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EditorModalContent = styled.div`
    position: relative;
    margin: auto;
    padding: 20px;
    width: 80%;
    max-width: 800px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 3;
    transform: translateY(0);
`;


const EditorHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const EditorBody = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftPane = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RightPane = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
`;

const EditorTitleInput = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const EditorTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 14px;
    box-sizing: border-box;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

const SearchInput = styled.input`
    width: calc(100% - 20px);
    padding: 8px;
    font-size: 14px;
    box-sizing: border-box;
`;

const PosterImage = styled.img`
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 15px;
`;

const EditorButton = styled.button`
    padding: 10px 20px;
    background-color: #FF8D8D;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
`;

const TextEditor = () => {
    const [showModal, setShowModal] = useState(false);
    const [editorTitle, setEditorTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [posterUrl, setPosterUrl] = useState('');

    const handleOpenModal = () => {
        setShowModal(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        document.body.classList.remove('modal-open');
    };

    const handleSave = () => {
        console.log('Title:', editorTitle);
        console.log('Content:', editorContent);
        handleCloseModal();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        // 임의의 이미지 링크
        const imageMap = {
            듄: './듄.png',
            인사이드아웃: './인사이드아웃.png',
            탈주: './탈주.png',
            하이재킹: './하이재킹.png',
            핸섬가이즈: './핸섬가이즈.png',
        };

        const selectedPoster = imageMap[searchTerm];
        if (selectedPoster) {
            setPosterUrl(selectedPoster);
        } else {
            setPosterUrl('');
        }
    };

    return (
        <Container>
            <GlobalStyle />
            <button onClick={handleOpenModal}>텍스트 에디터 열기</button>
            <Modal show={showModal}>
                <EditorModalContent>
                    <EditorHeader>
                        <h2>{new Date().toLocaleDateString()}</h2>
                    </EditorHeader>
                    <EditorBody>
                        <LeftPane>
                            <SearchContainer>
                                <SearchInput
                                    type="text"
                                    placeholder="영화 검색"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={handleKeyPress} // Enter 키 입력 시 처리
                                />
                            </SearchContainer>
                            {posterUrl && <PosterImage src={posterUrl} alt="Movie Poster" />}
                        </LeftPane>
                        <RightPane>
                            <EditorTitleInput
                                type="text"
                                placeholder="제목을 입력하세요"
                                value={editorTitle}
                                onChange={(e) => setEditorTitle(e.target.value)}
                            />
                            <EditorTextArea
                                placeholder="내용을 입력하세요"
                                value={editorContent}
                                onChange={(e) => setEditorContent(e.target.value)}
                            />
                            <EditorButton onClick={handleSave}>기록하기</EditorButton>
                        </RightPane>
                    </EditorBody>
                </EditorModalContent>
            </Modal>
        </Container>
    );
};

export default TextEditor;
