import { styled } from "styled-components";
import * as C from "../../components/index";
import LandingImage from "../../components/common/landing/landingImage";

const Main = () => {
  return (
    <div style={{overflowX: 'hidden'}}>
      <C.Header />
      <Container>

      <Mainpage>
        <div>
          <LandingImage/>
          <Title style={{marginTop: '50px'}}>그림 일기로 돌아보는 나의 감정들</Title>
    
        </div>
      </Mainpage>
      

      <Subpage>
      
        <TextBox>
            <Title>Welcome to the Landing TextBox!</Title>
            <Subtitle>Enjoy your stay.</Subtitle>
          </TextBox>
          <TextBox>
            <Title>Welcome to the Landing TextBox!</Title>
            <Subtitle>Enjoy your stay.</Subtitle>
          </TextBox>

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
`
const Subpage = styled.div`
  display: flex;
  flex-direction: column;

  height: 3287px;
  background: linear-gradient(#9A7676 10%, #212532);
`

const TextBox = styled.div`
  /* background-color: blue; */
  height: 50vh;
  width: 100%;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 8px;
  color: #666;
  text-align: center;
`;
