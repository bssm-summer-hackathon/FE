import { atom } from "recoil";

export const ChatLog = atom({
  key: "chatlog",
  default: [
    {
      isMyChat: false,
      string: "무엇이든 말해주세요!! 귀 기울여 들어드릴게요~~!",
    },
  ],
});

export const CurrentChat = atom({
  key: "currentchat",
  default: "",
});

export const ChatData = atom({
  key: "chatdata",
  default: {
    isMyChat: false,
    string: "",
  },
});

export const DiaryInfo = atom({
  key: "DiaryInfo",
  default: {
    year: 0,
    month: 0,
    date: 0,
    emotion1: "",
    emotion2: "",
    emotion3: "",
    diaryTitle: "",
    diaryContent: "",
  },
});

export const SignUpInfo = atom({
  key: "SignUpInfo",
  default: {
    name: "",
    id: "",
    pw: "",
  },
});

export const LoginInfo = atom({
  key: "LoginInfo",
  default: {
    id: "",
    pw: "",
  },
});

export const ImgInfo = atom<any>({
  key: "ImgInfo",
  default: {
    imgurl: "",
  },
});
