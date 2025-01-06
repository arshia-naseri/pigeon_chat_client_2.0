import { useContext } from "react";
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

  return (
    <>
      <main className={CN("flex h-3 w-full flex-col bg-offWhite", className)}>
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
          className="bg-green-400 py-3"
          messages={chatRoomObj.messages}
        />
        <Chatbar />
      </main>
    </>
  );
};

{
  /* <textarea
          rows="1"
          onClick={(e) =>
            console.log(
              JSON.stringify(e.currentTarget.value).replace(/\\n/g, "<br/>"),
            )
          }
          className="mt-56 box-border w-full resize-none overflow-hidden"
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
        /> */
}

export default Chatroom;
