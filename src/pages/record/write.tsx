import { styled } from "styled-components";

export default function Write() {
  return (
    <Container>
      <TextWrapper>오늘 하루 있었던 일을 기록해 봐요.</TextWrapper>
      <Input placeholder="제목" />
      <TextArea placeholder="오늘 있었던 일을 기록해 주세요." />
    </Container>
  );
}

const Container = styled.div`
  padding: 115px 160px;
`;
const TextWrapper = styled.div`
  font-size: 32px;
`;

const Input = styled.input`
  padding: 28px;
  width: 100%;
  font-size: 24px;
  border-radius: 10px;
  border: 0;
  margin-top: 42px;
  background-color: #f9f9f9;
`;
const TextArea = styled.textarea`
  border: 0;
  resize: none;
  font-size: 24px;
  border-radius: 10px;
  padding: 28px;
  width: 100%;
  background-color: #f9f9f9;
  margin-top: 20px;
  height: 300px;
`;
