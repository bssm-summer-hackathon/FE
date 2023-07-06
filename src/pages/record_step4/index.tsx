import { styled } from "styled-components";
import * as C from "../../components/index";
import Main from "../main";

const RecordStep4 = () => {
  return (
    <>
      <C.Header />
      <Container>
        <Title>오늘 나의 일기에요 😙</Title>
        <MainElementSection>
          <ImgSection />
          <DiarySection>
            <DiaryTitle>
              오랜만에 친구들이랑 모여서
              <br />밥 먹은 날
            </DiaryTitle>
            <DiaryParagraph>
              오늘은 중학교 친구들이랑 모여서 밥을 먹었다. 다들 고등학교에
              진학하고 바빠서 날 수 있는 날이 얼마 없었는데, 정말 오랜만에 만날
              수 있는 기회가 생겼다. 오늘은 중학교 친구들이랑 모여서 밥을
              먹었다. 다들 고등학교에 진학하고 바빠서 만날 수 있는 날이 얼마
              없었는데, 정말 오랜만에 만날 수 있는 기회가 생겼다. 오늘은 중학교
              친구들이랑 모여서 밥을 먹었다. 다들 고등학교에 진학하고 바빠서
              만날 수 있는 날이 얼마 없었는데, 정말 오랜만에 만날 수 있는 기회가
              생겼다. 오늘은 중학교 친구들이랑 모여서 밥을 먹었다. 다들
              고등학교에 진학하고 바빠서 만날 수 있는 날이 얼마 없었는데, 정말
              오랜만에 만날 수 있는 기회가 생겼다.
            </DiaryParagraph>
          </DiarySection>
        </MainElementSection>
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

const ImgSection = styled.div`
  width: 28.75rem;
  height: 28.75rem;

  background-image: url("");

  background-color: red;

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
