import { useContext, useEffect, useRef, useState } from "react";
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
   * @type {{ user: User}}
   */
  const context = useContext(materialContext);
  const { user, setUser } = context;
  const [chatRoomObj, setChatRoomObj] = useState(
    user.chatRoomList.find((chatroom) => chatroom._id === selectedChatRoomID),
  );
  const chatContainerRef = useRef();

  const chatroomCleanup = () => {
    const dateCleanup = () => {
      // Remove similar dates
      const elms = document.getElementsByClassName("dateBanner");
      let prevDate = "";
      for (let elm of elms) {
        elm.style.display = "block";
        if (prevDate === elm.innerHTML) {
          elm.style.display = "none";
        } else {
          prevDate = elm.innerHTML;
        }
      }
    };

    const messageBubbleCleanup = () => {
      let elms = document.querySelectorAll("[data-message-bubble-triangle]");
      elms = [...elms].reverse();
      let prevUser = "";
      for (let elm of elms) {
        let currUser = elm.getAttribute("data-message-bubble-triangle");
        elm.style.display = "block";

        if (prevUser === currUser) {
          let grandparent = elm.parentElement?.parentElement.parentElement;
          grandparent.style.setProperty("margin-bottom", "0.3rem", "important");
          elm.style.display = "none";
        } else {
          prevUser = currUser;
        }
      }
    };

    dateCleanup();
    messageBubbleCleanup();
  };
  const bottomScrollChat = () => {
    chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight);
  };

  useEffect(() => {
    setChatRoomObj(
      user.chatRoomList.find((chatroom) => chatroom._id === selectedChatRoomID),
    );
  }, [user, selectedChatRoomID]);

  // ChatRoom Not Selected
  if (chatRoomObj === undefined) {
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
  }

  const updateTextAreaHeight = (textAreaElm, maxLineNo = 4) => {
    const lineHeight = parseInt(
      window.getComputedStyle(textAreaElm).lineHeight,
    );
    const numberOfLines = Math.floor(textAreaElm.scrollHeight / lineHeight);

    if (numberOfLines > maxLineNo) return;

    textAreaElm.style.height = "auto";
    textAreaElm.style.height = textAreaElm.scrollHeight + "px";
  };

  const updateMessages = (text, from, time) => {
    const newMessage = {
      text: text,
      from: from,
      time: time,
    };

    setUser((/** @type {User} */ prevUser) => {
      const chatRoomList = [...prevUser.chatRoomList];
      const targetIndex = chatRoomList.findIndex(
        (chatRoom) => chatRoom._id === selectedChatRoomID,
      );
      const updatedChatRoom = {
        ...chatRoomList[targetIndex],
        messages: [...chatRoomList[targetIndex].messages, newMessage],
      };
      chatRoomList[targetIndex] = updatedChatRoom;

      return {
        ...prevUser,
        chatRoomList,
      };
    });
  };

  const sendMessageForm = (e) => {
    e.preventDefault();
    const textElement = e.currentTarget.elements["text"];
    let text = textElement.value;
    if (text === "") return;
    let HTMLtext = JSON.stringify(text).replace(/\\n/g, "<br/>").slice(1, -1);

    updateMessages(
      HTMLtext,
      { name: user.name, username: user.username, avatarPic: user.avatarPic },
      new Date().toISOString(),
    );
    textElement.value = "";
    textElement.focus();
    updateTextAreaHeight(textElement);
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
          chatroomCleanup={chatroomCleanup}
          chatContainerRef={chatContainerRef}
          bottomScrollChat={bottomScrollChat}
        />
        <Chatbar
          bottomScrollChat={bottomScrollChat}
          sendMessageForm={sendMessageForm}
          className="flex-grow-0 bg-primaryPurpleLight_half"
          updateTextAreaHeight={updateTextAreaHeight}
        />
      </main>
    </>
  );
};

export default Chatroom;
