import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { ChatLog, ChatData } from "../../../state";
import React, { useState } from "react";
import axios from "axios";
import * as C from "../../index";

const ChatInput = (props: any) => {
  const [currentChat, setCurrentChat] = useState("");
  const [chatLog, setChatLog] = useRecoilState(ChatLog);
  const [chatData, setChatData] = useRecoilState(ChatData);

  return (
    <FormContainer
      onSubmit={async function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (currentChat !== "")
          setChatLog(
            chatLog.concat({
              isMyChat: true,
              string: currentChat,
            })
          );
        setCurrentChat("");
        await axios
          .post("http://localhost:3232/api/chat/chat", {
            text: currentChat,
          })
          .then((res) => {
            return setChatData({
              string: res.data.content,
              isMyChat: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <Container
        value={currentChat}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentChat(e.target.value);
        }}
        placeholder={props.placeholder}
      />
      <ButtonContainer type={"submit"} value=""></ButtonContainer>
    </FormContainer>
  );
};

export default ChatInput;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
`;

const Container = styled.input`
  width: 92.5%;
  height: 100%;

  border: none;
  outline: none;

  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.44, 0.47, 1.32);

  box-shadow: 0 -2px 0 0 #cbcbcb inset;

  font-family: "NanumSquareRound";
  font-size: 1.25rem;

  &:focus {
    transform: scale(1.01);
    box-shadow: 0 -2px 0 0 #000000 inset;
  }
`;

const ButtonContainer = styled.input`
  height: 100%;
  width: 10%;

  border-radius: 0.25rem;

  background-image: url("/images/button/sendmessage.svg");
  background-size: cover;

  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
