import { useState, useEffect } from "react";
import { keyframes, styled, css } from "styled-components";

const Calender = () => {
  const dateArray = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isDropDownSelected, setIsDropDownSelected] = useState(0);

  console.log(isDropDownSelected);

  const getDatesStartToLast = (year: number, month: number) => {
    const result = [];

    const startDate = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0);

    startDate.setDate(startDate.getDate() + 1);
    lastDate.setDate(lastDate.getDate() + 1);
    let week = [];
    while (startDate <= lastDate) {
      week.push(startDate.toISOString().split("T")[0].split("-")[2]);

      if (
        startDate.getDay() === 0 ||
        startDate.getDate() === lastDate.getDate()
      ) {
        result.push(week);
        week = [];
      }

      startDate.setDate(startDate.getDate() + 1);
    }

    while (result[0].length < 7) {
      result[0].unshift("");
    }
    while (result[result.length - 1].length < 7) {
      result[result.length - 1].push("");
    }

    return result;
  };

  const [month, setMonth] = useState(
    getDatesStartToLast(currentYear, currentMonth + 1)
  );

  useEffect(() => {}, []);

  return (
    <Container>
      <CalenderContainer>
        <CalenderHeader>
          <SelectDate
            onClick={() => setIsDropDownSelected(isDropDownSelected + 1)}
          >
            2023년 7월
          </SelectDate>
          <SelectIcon
            selected={isDropDownSelected}
            onClick={() => setIsDropDownSelected(isDropDownSelected + 1)}
          ></SelectIcon>
          <Dropdown selected={isDropDownSelected}>
            <DropdownHeader></DropdownHeader>
          </Dropdown>
          <Dropdown selected={isDropDownSelected}>
            <DropdownHeader></DropdownHeader>
          </Dropdown>
        </CalenderHeader>
        <CalenderSection>
          <WeekDiv>
            {dateArray.map((date) => {
              return <DateDiv>{date}</DateDiv>;
            })}
          </WeekDiv>
          <CalenderDiv>
            {month.map((week) => {
              return (
                <WeekDiv>
                  {week.map((day) => {
                    return <DateDiv>{day !== "" ? Number(day) : day}</DateDiv>;
                  })}
                </WeekDiv>
              );
            })}
          </CalenderDiv>
        </CalenderSection>
      </CalenderContainer>
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalenderContainer = styled.div`
  width: 33rem;
  height: 33rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 3rem;

  padding: 2rem;
`;

const CalenderHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  position: relative;

  width: max-content;
  height: max-content;
`;
const SelectDate = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  font-family: "NanumSquareRound";

  cursor: pointer;
`;

const showDropdown = keyframes`
  from {
    display: none;
    height: 0;
    width: 10rem;

    opacity: 0;
    font-size: 0;
    color: white;
  }

  to {
    display: grid;
    height: 9.375rem;
    width: 10rem,;

    opacity: 1;
    font-size: 1.5rem;
    color: black;
  }
`;

const clearDropdown = keyframes`
  from {
    display: grid;
    height: 9.375rem;
    width: 10rem;

    opacity: 1;
    font-size: 1.5rem;
    color: black;
  }

  to {
    display: none;
    height: 0;
    width: 10rem;

    opacity: 0;
    font-size: 0;
    color: white;
  }
`;

const Dropdown = styled.div<{ selected: number }>`
  width: 10rem;
  height: 9.375rem;

  position: absolute;
  top: 120%;
  left: 0;
  opacity: 0;

  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: repeat(1fr, 3);
  background-color: aliceblue;

  grid-gap: 1rem;

  ${(props) =>
    props.selected === 0
      ? ""
      : props.selected % 2 === 1
      ? css`
          animation: ${showDropdown} forwards;
        `
      : css`
          animation: ${clearDropdown} forwards;
        `}
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);
`;

const DropdownHeader = styled.div``;

const SelectIcon = styled.div<{ selected: number }>`
  width: 1rem;
  height: 1rem;

  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EYYzX-Neo0gHlz4LpLOxAlcbNZCwwcW0rQ&usqp=CAU");
  background-size: cover;

  transform: ${(props) =>
    props.selected % 2 === 1 ? "rotate(90deg)" : "rotate(0deg)"};

  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  cursor: pointer;
`;

const CalenderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CalenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  justify-content: center;
`;

const WeekDiv = styled.div`
  display: flex;
  gap: 4.25rem;

  font-weight: 600;
  font-family: "NanumSquareRound";
  font-size: 1.35rem;
`;

const DateDiv = styled.div`
  min-width: 1.5rem;
  min-height: 1.5rem;

  text-align: center;
`;
