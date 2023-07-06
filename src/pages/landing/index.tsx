import styled from "styled-components";
import { Header } from "../../components";
import HeroSection from "./HeroSection";

const LadingPage = () => {
  return (
    <>
      <Header />
      <StyledLandingPage>
        <LandingWrap>
          <HeroSection />
        </LandingWrap>
      </StyledLandingPage>
    </>
  );
};

export default LadingPage;

const StyledLandingPage = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const LandingWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 100px;
`;
