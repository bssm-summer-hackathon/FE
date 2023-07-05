import { styled } from "styled-components";
import * as C from "../../components/index";

const Register = (props: { usage: string }) => {
  return (
    <Container>
      {props.usage === "login" ? <C.Login /> : <C.Signup />}
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;
