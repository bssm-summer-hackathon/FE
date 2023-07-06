import { useEffect, useState } from "react";
import { styled } from "styled-components";
import * as C from "../../components/index";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { DiaryInfo } from "../../state";

const RecordStep2 = () => {
  const [diaryInfo, setDiaryInfo] = useRecoilState(DiaryInfo);

  const [badEmotionList, setBadEmotionList] = useState([
    { text: "불안해요", isPick: false },
    { text: "우울해요", isPick: false },
    { text: "피곤해요", isPick: false },
    { text: "무기력해요", isPick: false },
    { text: "답답해요", isPick: false },
    { text: "초조해요", isPick: false },
    { text: "외로워요", isPick: false },
  ]);

  const [goodEmotionList, setGoodEmotionList] = useState([
    { text: "행복해요", isPick: false },
    { text: "안심돼요", isPick: false },
    { text: "기뻐요", isPick: false },
    { text: "즐거워요", isPick: false },
    { text: "여유로워요", isPick: false },
    { text: "신나요", isPick: false },
    { text: "힘이나요", isPick: false },
  ]);

  const [filteredGoodEmotionList, setFilteredGoodEmotionList] = useState<
    string[]
  >([]);
  const [filteredBadEmotionList, setFilteredBadEmotionList] = useState<
    string[]
  >([]);
  // 위에 이거 2개에 감정 string으로 담겨있어요

  useEffect(() => {
    setFilteredGoodEmotionList(
      goodEmotionList.filter((item) => item.isPick).map((item) => item.text)
    );
  }, [goodEmotionList]);

  useEffect(() => {
    setFilteredBadEmotionList(
      badEmotionList.filter((item) => item.isPick).map((item) => item.text)
    );
  }, [badEmotionList]);

  useEffect(() => {}, [badEmotionList]);

  const handleGoodEmotionClick = (text: string, isPick: boolean) => {
    setGoodEmotionList((prev) => {
      const updatedList = prev.map((item) => {
        if (item.text === text) {
          return { ...item, isPick: !isPick };
        }
        return item;
      });
      return updatedList;
    });
  };
  const handleBadEmotionClick = (text: string, isPick: boolean) => {
    setBadEmotionList((prev) => {
      const updatedList = prev.map((item) => {
        if (item.text === text) {
          return { ...item, isPick: !isPick };
        }
        return item;
      });
      return updatedList;
    });
  };

  useEffect(() => {
    const fullList = filteredGoodEmotionList.concat(filteredBadEmotionList);

    if (fullList.length === 3)
      setDiaryInfo({
        ...diaryInfo,
        emotion1: fullList[0],
        emotion2: fullList[1],
        emotion3: fullList[2],
      });

    if (fullList.length === 2)
      setDiaryInfo({
        ...diaryInfo,
        emotion1: fullList[0],
        emotion2: fullList[1],
      });

    if (fullList.length === 1)
      setDiaryInfo({
        ...diaryInfo,
        emotion1: fullList[0],
      });

    console.log(diaryInfo);
  }, [filteredGoodEmotionList, filteredBadEmotionList]);

  return (
    <>
      <C.Header />
      <TextWrapper>
        <Bold>원설아</Bold> <br />
        님, 오늘 하루는 어떠세요? (최대 3개의 아이콘을 골라주세요.)
      </TextWrapper>
      <Container>
        <PageContainer>
          {/* <PrevButton to="/record/step1"> {"<"} </PrevButton> */}
          <div>
            <Emoji>😊</Emoji>
            <EmotionContainer>
              {goodEmotionList.map((item) => (
                <EmotionItem
                  isPick={item.isPick}
                  onClick={() => {
                    if (
                      filteredGoodEmotionList.length +
                        filteredBadEmotionList.length >=
                        3 &&
                      item.isPick === false
                    ) {
                      return;
                    }
                    handleGoodEmotionClick(item.text, item.isPick);
                  }}
                >
                  {item.text}
                </EmotionItem>
              ))}
            </EmotionContainer>
          </div>
          <div style={{ marginLeft: "40px" }}>
            <Emoji>🤨</Emoji>
            <EmotionContainer>
              {badEmotionList.map((item) => (
                <EmotionItem
                  isPick={item.isPick}
                  onClick={() => {
                    if (
                      filteredGoodEmotionList.length +
                        filteredBadEmotionList.length >=
                        3 &&
                      item.isPick === false
                    ) {
                      return;
                    }
                    handleBadEmotionClick(item.text, item.isPick);
                  }}
                >
                  {item.text}
                </EmotionItem>
              ))}
            </EmotionContainer>
          </div>
          <NextButton to="/record/step3"> {">"} </NextButton>
        </PageContainer>
      </Container>
    </>
  );
};

export default RecordStep2;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

const TextWrapper = styled.div`
  font-size: 24px;
  padding-left: 100px;
  padding-top: 140px;
  font-family: "NanumSquareRound";
  box-sizing: border-box;
`;

const Emoji = styled.span`
  font-size: 40px;
`;

const Bold = styled.span`
  font-weight: 700;
  font-family: "NanumSquareRound";
`;

const EmotionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 20px;
  margin-top: 22px;
`;

const EmotionItem = styled.div<{ isPick: boolean }>`
  padding: 22px 22px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #f9f9f9;
  ${(props) =>
    props.isPick &&
    "box-shadow: 0 0 0px 4px #FAC87D inset; transform: scale(1.05) ;"}

  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);
  border-radius: 10px;
  cursor: pointer;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
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

// const PrevButton = styled(Link)`
//   height: 25%;
//   width: 35px;

//   position: absolute;

//   top: 25%;
//   left: 0;

//   margin: 170px 50px 0 50px;

//   font-weight: 600;
//   font-size: 2rem;
//   padding-bottom: 7px;
//   box-sizing: border-box;
//   color: #4f4f4f;

//   border-radius: 10px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition-duration: 0.5s;
//   transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

//   &:hover {
//     cursor: pointer;
//     width: 55px;
//   }
// `;
