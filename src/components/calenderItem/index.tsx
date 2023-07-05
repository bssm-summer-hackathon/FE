import { styled } from "styled-components";

interface PropsType {
  id: number;
  content: string;
  imgSrc: string;
}

const CalenderItem = ({ id, content, imgSrc }: PropsType) => {
  return (
    <StyledCalenderItem>
      <IndexBox>{id}</IndexBox>
      <ContentBox>
        <ContentText>{content}</ContentText>
      </ContentBox>
      <CalenderImage src={imgSrc} />
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
  width: 126px;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(180deg, #d9d9d9 0%, rgba(0, 0, 0, 0.5) 100%);
`;
