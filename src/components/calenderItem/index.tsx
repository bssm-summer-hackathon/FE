import { styled } from "styled-components";

const CalenderItem = () => {
  return (
    <StyledCalenderItem>
      <IndexBox>1</IndexBox>
      <ContentBox>
        <ContentText>오랜만에 친구들이랑 모여서 밥 먹은 날</ContentText>
      </ContentBox>
      <CalenderImage />
    </StyledCalenderItem>
  );
};

export default CalenderItem;

const StyledCalenderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 23px;
  width: 100%;
  height: 126px;
`;

const IndexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: NanumSquareRoundOTF;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 10%;
  height: 100%;
  border-radius: 10px;
  background: var(--navy, #212532);
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 43px;
  width: 75%;
  height: 100%;
  border-radius: 10px;
  background-color: #f0f0f0;
`;

const ContentText = styled.p`
  color: #000;
  font-family: NanumSquareRoundOTF;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const CalenderImage = styled.img`
  width: 15%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(180deg, #d9d9d9 0%, rgba(0, 0, 0, 0.5) 100%);
`;
