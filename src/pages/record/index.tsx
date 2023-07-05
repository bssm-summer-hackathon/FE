import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Record = () => {
  const [goodEmotionList, setGoodEmotionList] = useState([
    { text: "불안해요", isPick: false },
    { text: "우울해요", isPick: false },
    { text: "피곤해요", isPick: false },
    { text: "무기력해요", isPick: false },
    { text: "답답해요", isPick: false },
    { text: "초조해요", isPick: false },
    { text: "외로워요", isPick: false },
  ]);

  const [badEmotionList, setBadEmotionList] = useState([
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

  return (
    <Container>
      <TextWrapper>
        <Bold>원설아</Bold> <br />
        님, 오늘 하루는 어떠세요?
      </TextWrapper>

      <PageContainer>
        <div>
          <Emoji>😊</Emoji>
          <EmotionContainer>
            {goodEmotionList.map((item) => (
              <EmotionItem
                isPick={item.isPick}
                onClick={() => handleGoodEmotionClick(item.text, item.isPick)}
              >
                {item.text}
              </EmotionItem>
            ))}
          </EmotionContainer>
        </div>
        <Line />
        <div>
          <Emoji>🫤</Emoji>
          <EmotionContainer>
            {badEmotionList.map((item) => (
              <EmotionItem
                isPick={item.isPick}
                onClick={() => handleBadEmotionClick(item.text, item.isPick)}
              >
                {item.text}
              </EmotionItem>
            ))}
          </EmotionContainer>
        </div>
      </PageContainer>
    </Container>
  );
};

export default Record;

const Container = styled.div``;

const TextWrapper = styled.div`
  font-size: 32px;
  padding-left: 200px;
  padding-top: 80px;
`;

const Emoji = styled.span`
  font-size: 40px;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const EmotionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 22px;
  margin-top: 22px;
`;

const EmotionItem = styled.div<{ isPick: boolean }>`
  padding: 40px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #f9f9f9;
  ${(props) => props.isPick && "border: 1px solid #FAC87D;"}
  border-radius: 10px;
  width: 90px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  align-items: center;
`;

const Line = styled.div`
  width: 1px;
  height: 600px;
  background-color: #eeeeee;
`;
