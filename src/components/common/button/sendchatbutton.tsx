import { styled } from "styled-components";

const RegisterButton = () => {
  return <Container></Container>;
};

export default RegisterButton;

const Container = styled.div`
  width: max-content;
  height: min-content;

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
