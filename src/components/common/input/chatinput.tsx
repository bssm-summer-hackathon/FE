import { styled } from "styled-components";

const ChatInput = () => {
  return <Container></Container>;
};

export default ChatInput;

const Container = styled.input`
  width: 92.5%;
  height: 100%;

  border: none;
  outline: none;

  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  box-shadow: 0 -2px 0 0 #cbcbcb inset;

  &:focus {
    transform: scale(1.01);
    box-shadow: 0 -2px 0 0 #000000 inset;
  }
`;
