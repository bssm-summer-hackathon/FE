import { styled } from "styled-components";
import * as C from "../../components/index";
import { Link } from "react-router-dom";

const RecordStep1 = () => {
  return (
    <>
      <C.Header />
      <Container>
        <TimeInputSection>
          <TimeSection>
            <Title>오늘 날짜를 입력해 주세요</Title>
            <YearInput placeholder="YYYY" />
            <MonthDaySection>
              <MonthInput placeholder="MM" />
              <DayInput placeholder="DD" />
            </MonthDaySection>
          </TimeSection>
          <NextButton to="/record/step2"> {">"} </NextButton>
        </TimeInputSection>
      </Container>
    </>
  );
};

export default RecordStep1;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeInputSection = styled.div`
  width: max-content;
  height: max-content;

  position: relative;

  display: flex;

  gap: 0.5rem;
`;

const TimeSection = styled.div`
  display: flex;
  width: 90%;
  height: 100%;

  flex-direction: column;
`;

const Title = styled.div`
  font-family: "NanumSquareRound";
  font-size: 2rem;
`;

const YearInput = styled.input`
  padding: 1.5rem 1rem;
  width: 95%;

  position: relative;

  font-family: "NanumSquareRound";
  font-size: 1.5rem;
  border-radius: 10px;
  border: 0;
  margin-top: 42px;
  background-color: #f9f9f9;

  outline: none;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  &:focus {
    box-shadow: 0 0 0px 4px #9a9a9a inset;
    transform: scale(1.05);
  }
`;

const MonthDaySection = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  gap: 2.5%;
`;

const MonthInput = styled.input`
  padding: 1.5rem 1rem;
  width: 50%;
  font-family: "NanumSquareRound";
  font-size: 1.5rem;
  border-radius: 10px;
  border: 0;
  margin-top: 21px;
  background-color: #f9f9f9;
  outline: none;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  &:focus {
    box-shadow: 0 0 0px 4px #9a9a9a inset;
    transform: scale(1.05);
  }
`;
const DayInput = styled.input`
  padding: 1.25rem 1rem;
  width: 40%;
  font-family: "NanumSquareRound";
  font-size: 1.5rem;
  border-radius: 10px;
  border: 0;
  margin-top: 21px;
  background-color: #f9f9f9;
  outline: none;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  &:focus {
    box-shadow: 0 0 0px 4px #9a9a9a inset;
    transform: scale(1.05);
  }
`;

const NextButton = styled(Link)`
  height: 175px;
  margin-top: 90px;
  width: 5%;

  margin-left: 1rem;
  margin-right: 1rem;

  background-color: #4f4f4f;
  font-weight: 600;
  font-size: 2rem;
  color: white;

  border-radius: 10px;

  vertical-align: middle;
  text-align: center;

  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  &:hover {
    width: 12%;
    cursor: pointer;
  }
`;
