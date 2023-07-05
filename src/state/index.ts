import { atom } from "recoil";

export const ChatLog = atom({
  key: "chatlog",
  default: [
    {
      isMyChat: true,
      string: "wefwef",
    },
  ],
});

export const CurrentChat = atom({
    key: "currentchat",
    default: "",
})
