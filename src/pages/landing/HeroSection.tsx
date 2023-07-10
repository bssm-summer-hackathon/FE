import styled from "styled-components";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <LogoWrapper>
        <LogoImage src="/images/logo/landing.svg" alt="landing-logo" />
        <LogoText>그림 일기로 돌아보는 나의 감정들</LogoText>
      </LogoWrapper>
      <LogoWrapper>
      </LogoWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection;

const StyledHeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const LogoImage = styled.img``;

const LogoText = styled.p`
  color: #212532;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-family: 'NanumSquareRound';
`;
