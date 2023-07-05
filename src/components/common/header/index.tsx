import { styled } from "styled-components";
import HeaderLogo from "../logo/headerlogo";
import { Link } from "react-router-dom";
import RegisterButton from "../button/registerbutton";

const Header = () => {
  return (
    <Container>
      <MenuSection>
        <HeaderLogo />
        <MenuText>
          <Link to="/chat">채팅하기</Link>
        </MenuText>
        <MenuText>
          <Link to="/calender">나의기록</Link>
        </MenuText>
        <MenuText>
          <Link to="/record/step1">기록하기</Link>
        </MenuText>
      </MenuSection>
      <RegisterSection>
        <Link to="/login">
          <RegisterButton string="로그인" />
        </Link>
        <Link to="/signup">
          <RegisterButton string="회원가입" />
        </Link>
      </RegisterSection>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 5rem;

  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 5.25rem 0rem 5.25rem;
  box-sizing: border-box;

  background-color: white;

  z-index: 1;

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
  font-size: 1.175rem;

  color: #b8b8b8;

  padding: 0rem 0.25rem;
  box-sizing: border-box;

  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);
  transition-duration: 0.5s;

  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;

const RegisterSection = styled.div`
  width: min-content;
  height: min-content;

  display: flex;

  gap: 1.5rem;
`;
