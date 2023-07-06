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
