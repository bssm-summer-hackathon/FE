import { styled } from "styled-components";

const BeforeButton = () => {
  return <Container></Container>;
};

export default BeforeButton;

const Container = styled.div`
  width: 3rem;
  height: 2rem;

  background-image: url("/images/button/gobefore.svg");
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`;
