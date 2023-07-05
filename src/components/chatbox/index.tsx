import { styled } from "styled-components";

const ChatBox = (props: { string: string; ismychat: boolean }) => {
  return (
    <Container ismychat={props.ismychat}>
      <ChatContainer ismychat={props.ismychat}>{props.string}</ChatContainer>
    </Container>
  );
};

export default ChatBox;

const Container = styled.div<{ ismychat: boolean }>`
  width: 100%;
  height: max-content;

  display: flex;
  justify-content: ${(props) => (props.ismychat ? "right" : "left")};
`;

const ChatContainer = styled.div<{ ismychat: boolean }>`
  width: max-content;
  height: max-content;

  max-width: 25rem;
  text-align: ${(props) => (props.ismychat ? "right" : "left")};

  padding: 1.25rem;

  border-radius: 2rem;
  background-color: #f9f9f9;
  color: ${(props) => (props.ismychat ? "#FAC87D" : "#5A7AA1")};

  font-family: "NanumSquareRound";
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
