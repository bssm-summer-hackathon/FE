import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as C from "../index";

const Login = () => {
  return (
    <Container>
      <LoginHeader>
        <C.RegisterLogo />
        <Title>회원가입</Title>
      </LoginHeader>
      <InputSection>
        <InfoInput placeholder="이름" />
        <InfoInput placeholder="아이디" />
        <InfoInput placeholder="비밀번호" type="password" />
      </InputSection>
      <FooterSection>
        <Link to="/">
          <C.BeforeButton />
        </Link>
        <C.RegisterButton string="로그인" />
      </FooterSection>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: min-content;
  height: max-content;

  position: relative;

  margin-top: 4.5rem;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 4rem;
`;

const LoginHeader = styled.div`
  width: 100%;
  height: min-content;

  display: flex;

  align-items: flex-end;

  gap: 7rem;
`;

const Title = styled.div`
  font-size: 1.75rem;
  font-family: "NanumSquareRound";
`;

const InputSection = styled.div`
  width: max-content;
  height: min-content;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoInput = styled.input`
  width: 28.188rem;
  height: 2.219rem;

  border: 0;
  outline: none;

  position: relative;

  font-family: "NanumSquareRound";
  font-size: 1.25rem;

  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  box-shadow: 0 -2px 0 0 #cbcbcb inset;

  &:focus {
    transform: scale(1.025);
    box-shadow: 0 -2px 0 0 #000000 inset;
  }
`;

const FooterSection = styled.div`
  width: 100%;
  height: min-content;

  display: flex;
  justify-content: space-between;
`;
