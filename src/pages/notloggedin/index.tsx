import { styled } from "styled-components";
import * as C from "../../components/index";

const NotLoggedIn = () => {
  return (
    <>
      <C.Header />
      <Container>
        로그인이 필요한 서비스에요.
        <C.RegisterButton
          method="login"
          string="로그인 하러 가기"
        ></C.RegisterButton>
      </Container>
    </>
  );
};

export default NotLoggedIn;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  font-family: "NanumSquareRound";
  font-size: 4rem;
  font-weight: 600;
`;
