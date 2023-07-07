import { styled } from "styled-components";
import * as C from "../../components/index";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { DiaryInfo, ImgInfo } from "../../state";

const RecordStep3 = () => {
  const [diaryInfo, setDiaryInfo] = useRecoilState(DiaryInfo);
  const [imgInfo, setImgInfo] = useRecoilState(ImgInfo);

  return (
    <>
      <C.Header />
      <Container>
        <TextSection>
          <TextWrapper>오늘 하루 있었던 일을 기록해 봐요.</TextWrapper>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDiaryInfo({
                ...diaryInfo,
                diaryTitle: e.target.value,
              });
            }}
            placeholder="제목"
          />
          <TextArea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setDiaryInfo({
                ...diaryInfo,
                diaryContent: e.target.value,
              });
              console.log(diaryInfo);
            }}
            placeholder="오늘 있었던 일을 기록해 주세요."
          />
        </TextSection>
        <NextButton
          to="/notloggedin"
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:3232/api/image/create",
              {
                diaryInfo,
              }
            );

            setImgInfo({
              imgurl: response,
            });
          }}
        >
          {">"}
        </NextButton>
      </Container>
    </>
  );
};

export default RecordStep3;

const Container = styled.div`
  padding: 120px 160px 0 160px;
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;
  display: flex;
`;
const TextSection = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  font-family: "NanumSquareRound";
  font-size: 2rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 22px;
  width: 100%;
  font-family: "NanumSquareRound";
  font-size: 1.5rem;
  border-radius: 10px;
  border: 0;
  margin-top: 42px;
  background-color: #f9f9f9;
  outline: none;
  box-sizing: border-box;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  &:focus {
    box-shadow: 0 0 0px 4px #9a9a9a inset;
    transform: scale(1.01);
  }
`;

const TextArea = styled.textarea`
  border: 0;
  resize: none;
  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  border-radius: 10px;
  padding: 22px;
  box-sizing: border-box;
  width: 100%;
  background-color: #f9f9f9;
  margin-top: 20px;
  height: 300px;

  outline: none;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  &:focus {
    box-shadow: 0 0 0px 4px #9a9a9a inset;
    transform: scale(1.01);
  }
`;

const NextButton = styled(Link)`
  height: 65%;
  margin-top: 90px;
  width: 3%;

  flex-grow: 1;

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
    width: 6%;
    cursor: pointer;
  }
`;
