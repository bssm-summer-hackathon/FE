import { styled } from "styled-components";
import * as C from "../../components/index";
import LandingImage from "../../components/common/landing/landingImage";

const Main = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <C.Header />

      <Container>
        <Mainpage>
          <div>
            <LandingImage />
            <Title style={{ marginTop: "50px" }}>
              그림 일기로 돌아보는 나의 감정들
            </Title>
          </div>
        </Mainpage>

        <Subpage>
          <TextBox style={{ marginLeft: "150px", marginTop: "" }}>
            <div style={{ display: "flex" }}>
              <Icon src="/images/landing/Edit.svg" alt="" />
              <MainText>AI와의 그림 일기 작성</MainText>
            </div>
            <SubText>
              오늘 하루를 일기로 기록하면,
              <br />
              AI가 한 장의 그림으로 표현해 줘요.
              <br />
              <br />
              AI와 함께 오늘 느꼈던 감정들을 그림 일기로 표현해 보아요 :)
            </SubText>
          </TextBox>
          <TextBox
            style={{
              textAlign: "end",
              marginLeft: "auto",
              marginRight: "150px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <MainText>나만의 일기 갤러리</MainText>
              <Icon src="/images/landing/image.svg" alt="" />
            </div>
            <SubText>
              기록했던 일기들은 갤러리에서 다시 볼 수 있어요!
              <br />
              나만의 그림 일기 갤러리를 쌓아 보세요.
              <br />
              <br />
              일기가 차곡차곡 쌓인 만큼 한눈에 볼 수 있답니다.
            </SubText>
          </TextBox>
          <TextBox style={{ marginLeft: "150px" }}>
            <div
              style={{
                display: "flex",

                alignItems: "center",
              }}
            >
              <FlyIcon src="/images/landing/Send.png" alt=""></FlyIcon>
              <MainText>챗봇을 통한 AI와의 대화!</MainText>
            </div>
            <SubText>
              고민이나 걱정되는 일이 있었나요?
              <br />
              AI와의 대화를 통해 조언을 얻을 수 있어요.
              <br />
              <br />
              대화의 시작이 어렵지 않도록, 선택지도 제공해요.
            </SubText>
          </TextBox>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FooterIcon src="/images/landing/whitelogo.png"></FooterIcon>
          </div>
        </Subpage>
      </Container>
    </div>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
`;

const Mainpage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 934px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
  text-align: center;
`;

const Subpage = styled.div`
  display: flex;
  flex-direction: column;
  height: 3287px;
  /* background: linear-gradient(#9A7676 0%, #212532); */

  background: linear-gradient(rgba(0, 255, 255, 0), #212532);
`;

const TextBox = styled.div`
  margin-top: 500px;
  height: 214px;
  width: 705px;
`;

const MainText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  /* color: linear-gradient(#312132 , rgba(33, 37, 50, 0.5)); //#212532 50% */

  color: linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5));

  font-family: "NanumSquareRound";
`;

const SubText = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 8px;
  color: black;

  font-family: "NanumSquareRound";
  font-size: 1.25rem;
`;
const Icon = styled.img`
  width: 35px;
  margin-top: 5px;
`;

const FooterIcon = styled.img`
  margin-top: 700px;
  width: 170px;
  height: 90px;
`;

const FlyIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 5px;
`;
