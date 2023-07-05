import { keyframes, styled } from "styled-components";

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
  align-items: flex-end;
  justify-content: ${(props) => (props.ismychat ? "right" : "left")};
`;

// const GenerateAnimation = `
//   from {
//     width: max-content;
//     height: 0;
//     opacity: 0;
//     font-size: 0rem;
//   }

//   30% {
//     width: max-content;
//     height: max-content;
//     opacity: 0.3;
//     font-size: 0rem;

//   }

//   to {
//   width: max-content;
//   height: max-content;

//   max-width: 25rem;
//   white-space: pre;
//   padding: 1.25rem;

//   border-radius: 2rem;

//   font-family: "NanumSquareRound";
//   font-size: 1rem;

//   margin-bottom: 0;

//   opacity: 1;
//   }
//`;

const ChatContainer = styled.div<{ ismychat: boolean }>`
  width: max-content;
  height: max-content;

  max-width: 25rem;
  white-space: pre;
  padding: 1.25rem;
  border-radius: 2rem;

  font-family: "NanumSquareRound";
  font-size: 1rem;
  background-color: #f1f1f1;
  text-align: ${(props) => (props.ismychat ? "right" : "left")};

  color: ${(props) => (props.ismychat ? "#ffae00" : "#5d91d1")};
`;
