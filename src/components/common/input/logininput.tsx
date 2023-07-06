import { styled } from "styled-components";

const LoginInput = (props: {
  placeholder: string;
  type: string;
  onChange: any;
}) => {
  return (
    <Container
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
    ></Container>
  );
};

export default LoginInput;

const Container = styled.input`
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
