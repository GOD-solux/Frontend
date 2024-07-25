import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const FileName = styled.div`
  background-color: #EDF1FE;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const FileInput = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
`;

const Button = styled.label`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #CACACA;
  font-size: 15px;
  cursor: pointer;
  
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: #EAEAEA;
    background-color: #7B7B7B;
  }
`;

const FileUpload = () => {
    const [fileName, setFileName] = useState('선택된 파일 없음');
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        setFileName(file.name);
      } else {
        alert('사진 파일만 업로드 가능합니다.');
        setFileName('선택된 파일 없음');
      }
    };
  
    return (
        <Wrapper>
            <FileName>{fileName}</FileName>
            <FileInput
                type="file" 
                accept="image/*"
                id="fileInput"
                onChange={handleImageUpload}
            />
            <Button htmlFor="fileInput">파일 찾기</Button>
        </Wrapper>
    );
};

export default FileUpload;