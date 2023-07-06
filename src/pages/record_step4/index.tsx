import { styled } from "styled-components";
import * as C from "../../components/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { DiaryInfo, ImgInfo } from "../../state";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecordStep4 = () => {
  const [diaryInfo, setDiaryInfo] = useRecoilState(DiaryInfo);
  const { imgurl } = useRecoilValue(ImgInfo);

  return (
    <>
      <C.Header />
      <Container>
        <Title>오늘 나의 일기에요 😙</Title>
        <MainElementSection>
          <ImgSection url={imgurl} />
          <DiarySection>
            <DiaryTitle>{diaryInfo.diaryTitle}</DiaryTitle>
            <DiaryParagraph>{diaryInfo.diaryContent}</DiaryParagraph>
          </DiarySection>
        </MainElementSection>
        <NextButton
          to="/calender"
          onClick={() => {
            setDiaryInfo({
              year: 0,
              month: 0,
              date: 0,
              emotion1: "",
              emotion2: "",
              emotion3: "",
              diaryTitle: "",
              diaryContent: "",
            });
          }}
        >
          {">"}
        </NextButton>
      </Container>
    </>
  );
};

export default RecordStep4;

const Title = styled.div`
  margin-left: 10rem;
  margin-bottom: 2rem;

  font-family: "NanumSquareRound";
  font-size: 2rem;
  font-weight: 600;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-top: 7.25rem;

  box-sizing: border-box;
`;

const MainElementSection = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 1.5rem;
`;

const ImgSection = styled.div<{ url: string }>`
  width: 28.75rem;
  height: 28.75rem;

  background-image: url("/images/arrow/아씨발좆같다.jpg");
  background-size: cover;

  border-radius: 1rem 0 0 1rem;
`;

const DiarySection = styled.div`
  width: 28.75rem;
  height: 28.75rem;

  background-color: #bcbcbc;

  border-radius: 0 1rem 1rem 0;

  font-family: "NanumSquareRound";
  font-size: 1.25rem;

  padding: 2rem;
  box-sizing: border-box;

  ::-webkit-scrollbar-thumb {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    opacity: 0;
  }

  overflow-y: auto;
`;

const DiaryTitle = styled.div`
  width: 24.75rem;
  white-space: pre-wrap;

  font-family: "NanumSquareRound";
  font-size: 2rem;
  font-weight: 600;
`;

const DiaryParagraph = styled.div`
  font-family: "NanumSquareRound";
  font-size: 1.25rem;

  margin-top: 1rem;
  white-space: pre-line;
  word-break: keep-all;
`;

const NextButton = styled(Link)`
  height: 22%;
  width: 35px;

  position: absolute;

  top: 21%;
  right: 0;

  margin: 170px 50px 0 50px;

  font-weight: 600;
  font-size: 2rem;
  padding-bottom: 7px;
  box-sizing: border-box;
  color: white;

  background-color: #4f4f4f;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  &:hover {
    cursor: pointer;
    width: 55px;
  }
`;
