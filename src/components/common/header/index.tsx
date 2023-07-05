import { styled } from "styled-components";
import Logo from "../logo/headerlogo";
import RegisterButton from "../button/registerbutton";

const Header = () => {
  return (
    <Container>
      <MenuSection>
        <Logo />
        <MenuText>소개</MenuText>
        <MenuText>채팅</MenuText>
        <MenuText>기록</MenuText>
        <MenuText>갤러리</MenuText>
      </MenuSection>
      <RegisterSection>
        <RegisterButton string="로그인" />
        <RegisterButton string="회원가입" />
      </RegisterSection>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 7rem;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 5.25rem 0rem 5.25rem;
  box-sizing: border-box;

  ::before {
    content: "";

    width: 90%;
    height: 0.031rem;

    position: absolute;
    bottom: 0;
    left: 5%;

    background-color: #b8b8b8;
  }
`;

const MenuSection = styled.div`
  width: max-content;
  height: min-content;

  display: flex;
  align-items: center;

  gap: 3.5rem;
`;

const MenuText = styled.div`
  font-family: "NanumSquareRound";
  font-size: 1rem;

  color: #b8b8b8;

  ::before {
    content: "";
    width: 0px;
    height: 0px;
  }

  :hover {
    cursor: pointer;
    color: #000000;

    ::before {
      content: "";
      width: 1rem;
      height: 0.0125rem;

      position: absolute;
      bottom: -0.125rem;
      left: 0;

      background-color: #000000;

      transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);
      transition-duration: 0.25s;
    }
  }
`;

const RegisterSection = styled.div`
  width: min-content;
  height: min-content;

  display: flex;

  gap: 1.5rem;
`;
