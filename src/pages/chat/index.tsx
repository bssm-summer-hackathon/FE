import { styled } from "styled-components";
import * as C from "../../components/index";

const Chat = () => {
  return (
    <>
      <C.Header />
      <Container>
        <ChatSection>
          <CourageText>자신의 감정을 부담없이 표현해보세요 !</CourageText>
          <C.ChatBox
            ismychat={true}
            string="백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼"
          />
          <C.ChatBox
            ismychat={false}
            string="백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼백진암X발돼지X끼"
          />
          <C.ChatBox ismychat={true} string="백진암X발돼지X끼" />
          <C.ChatBox ismychat={false} string="백진암X발돼지X끼" />
          <C.ChatBox ismychat={true} string="백진암X발돼지X끼" />
          <C.ChatBox ismychat={false} string="백진암X발돼지X끼" />
          <C.ChatBox ismychat={true} string="백진암X발돼지X끼" />
          <C.ChatBox ismychat={false} string="백진암X발돼지X끼" />
        </ChatSection>
        <InputSection>
          <C.ChatInput />
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

  overflow-y: auto;
`;

const InputSection = styled.div`
  flex-grow: 1;
  background-color: red;

  position: relative;
`;
