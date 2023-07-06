import { styled } from "styled-components";
import * as C from "../index";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../state";

const Login = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(LoginInfo);

  return (
    <Container>
      <LoginHeader>
        <C.RegisterLogo />
        <Title>로그인</Title>
      </LoginHeader>
      <InputSection>
        <C.LoginInput
          onChange={(e: any) => {
            setLoginInfo({
              ...loginInfo,
              id: e.target.value,
            });
          }}
          placeholder="아이디"
          type="text"
        />
        <C.LoginInput
          onChange={(e: any) => {
            setLoginInfo({
              ...loginInfo,
              pw: e.target.value,
            });
          }}
          placeholder="비밀번호"
          type="password"
        />
      </InputSection>
      <FooterSection>
        <Link to="/">
          <C.BeforeButton />
        </Link>
        <C.RegisterButton method="login" string="로그인" />
      </FooterSection>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: min-content;
  height: max-content;

  position: relative;

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

const FooterSection = styled.div`
  width: 100%;
  height: min-content;

  display: flex;
  justify-content: space-between;
`;