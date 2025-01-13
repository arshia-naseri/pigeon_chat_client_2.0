import { useContext, useRef } from "react";
import { materialContext } from "./index";
/**
 * @typedef {import("Lib/User").User} User
 * */
import CN from "Lib/Cn";
import ChatroomNavbar from "./_chatroom_navbar";
import ChatroomMessagesPanel from "./_chatroom_messages_panel";
import Chatbar from "./chatbar";

const Chatroom = ({ className, toggleSideBar, selectedChatRoomID }) => {
  /**
   * @type {{ user: User }}
   */
  const context = useContext(materialContext);
  const { user } = context;
  const chatContainerRef = useRef();

  const bottomScrollChat = () => {
    chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight);
  };

  if (selectedChatRoomID === "")
    return (
      <>
        <main
          className={CN(
            "flex flex-col items-center justify-center bg-offWhite",
            className,
          )}
        >
          {/* Failsafe */}
          <button
            type="button"
            className="block rounded bg-primaryPurple p-1 sm:hidden"
            onClick={() => toggleSideBar()}
          >
            Go Back
          </button>
          <div className="text-1xl mx-auto font-sans font-bold italic text-black/25">
            Select a Park or <button className="underline">Create</button> one
            yourself
          </div>
        </main>
      </>
    );

  const chatRoomObj = user.chatRoomList.filter(
    (chatroom) => chatroom._id === selectedChatRoomID,
  )[0];

  const sendMessageForm = (e) => {
    e.preventDefault();
    let text = e.currentTarget.elements["text"].value;
    if (text === "") return;

    let HTMLtext = JSON.stringify(text).replace(/\\n/g, "<br/>");
  };

  return (
    <>
      <main
        className={CN("flex h-full w-full flex-col bg-offWhite", className)}
      >
        <ChatroomNavbar
          className="shrink-0"
          imageName={
            chatRoomObj.isGroupChat
              ? "default-group.webp"
              : chatRoomObj.participants[0].avatarPic
          }
          name={chatRoomObj.groupName || chatRoomObj.participants[0].name}
          toggleSideBar={toggleSideBar}
        />
        <ChatroomMessagesPanel
          className="flex-1 shrink-0"
          messages={chatRoomObj.messages}
          isChatRoom={chatRoomObj.isGroupChat}
          mainUsername={user.username}
          selectedChatRoomID={selectedChatRoomID}
          chatContainerRef={chatContainerRef}
          bottomScrollChat={bottomScrollChat}
        />
        <Chatbar
          bottomScrollChat={bottomScrollChat}
          sendMessageForm={sendMessageForm}
          className="flex-grow-0 bg-primaryPurpleLight_half"
        />
      </main>
    </>
  );
};

export default Chatroom;
