import { styled } from "styled-components";
import * as C from "../../components/index";
import { useRecoilValue } from "recoil";
import { ChatLog } from "../../state";
import { useEffect, useRef } from "react";

const Chat = () => {
  const chat = useRef<HTMLDivElement>(null);

  const chatLog = useRecoilValue(ChatLog);

  let data = chatLog.map((data) => {
    return (
      <C.ChatBox string={data.string} ismychat={data.isMyChat}></C.ChatBox>
    );
  });

  useEffect(() => {
    if (chat.current?.scrollHeight)
      chat.current.scrollTop = chat.current?.scrollHeight;
  }, [chatLog]);

  return (
    <>
      <C.Header />
      <Container>
        <ChatSection ref={chat}>
          <CourageText>자신의 감정을 부담없이 표현해보세요 !</CourageText>
          {data}
        </ChatSection>
        <InputSection>
          <C.ChatInput placeholder="하고 싶은 말을 직접 적어보세요!" />
        </InputSection>
      </Container>
    </>
  );
};

export default Chat;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 7rem 8rem 3rem 8rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const CourageText = styled.div`
  width: 90%;

  margin: 2rem 0 3rem 0;
  box-sizing: border-box;

  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  font-weight: 600;
  color: #fac87d;

  text-align: center;
  vertical-align: center;
`;

const ChatSection = styled.div`
  width: 100%;
  height: 30rem;

  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  gap: 1.25rem;

  overflow-y: auto;
`;

const InputSection = styled.div`
  flex-grow: 1;
  display: flex;

  position: relative;
`;
