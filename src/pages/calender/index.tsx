import styled from "styled-components";
import { Header } from "../../components";
import CalenderItem from "../../components/calenderItem";

const CalenderPage = () => {
  return (
    <>
      <Header />
      <StyledCalender>
        <CalenderWrap>
          <Dropdown>
            2022년 7월{" "}
            <ArrowIcon src="/images/arrow/arrow-up.svg" alt="arrow-up" />
          </Dropdown>
          <CalenderList>
            <CalenderItem id={1} content="안녕" imgSrc="이미지링크" />
          </CalenderList>
        </CalenderWrap>
      </StyledCalender>
    </>
  );
};

export default CalenderPage;

const StyledCalender = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const CalenderWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 100px;
`;

const CalenderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Dropdown = styled.div`
  display: flex;
  align-content: center;
  color: #000;
  font-family: "NanumSquareRound";
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  cursor: pointer;
  margin: 50px 0px;
`;

const ArrowIcon = styled.img`
  width: 33px;
  height: 33px;
`;
