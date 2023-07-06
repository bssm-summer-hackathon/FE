import { styled } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { SignUpInfo, LoginInfo } from "../../../state";

const RegisterButton = (props: { string: string; method: string }) => {
  const [signUpInfo, setSignUpInfo] = useRecoilState(SignUpInfo);
  const [loginInfo, setLoginInfo] = useRecoilState(LoginInfo);

  return (
    <Container
      onClick={
        props.method === "signup"
          ? async () => {
              await axios.post("http://localhost:3232/api/auth/signup", {
                signUpInfo,
              });
            }
          : async () => {
              await axios.post("http://localhost:3232/api/auth/login", {
                loginInfo,
              });
            }
      }
      to="/"
    >
      {props.string}
    </Container>
  );
};

export default RegisterButton;

const Container = styled(Link)`
  width: max-content;
  height: min-content;
  display: flex;

  padding: 0.525rem 1.25rem 0.525rem 1.25rem;

  background-color: #000000;
  color: rgb(255, 255, 255);

  font-family: "NanumSquareRound";
  font-size: 1rem;

  border-radius: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
