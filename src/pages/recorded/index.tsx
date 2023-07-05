import { styled } from "styled-components";
import * as C from "../../components/index";

const Recorded = () => {
  return (
    <>
      <C.Header />
      <Container>
        <ImgSection />
        <DiarySection>
            <DiaryTitle></DiaryTitle>
        </DiarySection>
      </Container>
    </>
  );
};

export default Recorded;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding-top: 7.25rem;

  box-sizing: border-box;
`;

const ImgSection = styled.div`
  width: 32.75rem;
  height: 32.75rem;

  background-image: url("");

  background-color: red;

  border-radius: 1rem 0 0 1rem;
`;

const DiarySection = styled.div`
  width: 32.75rem;
  height: 32.75rem;

  background-color: blue;

  border-radius: 0 1rem 1rem 0;
`;

const DiaryTitle = styled.div`

`;
