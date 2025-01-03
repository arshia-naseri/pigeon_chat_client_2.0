import { useContext } from "react";
import { materialContext } from "./index";
/**
 * @typedef {import("Lib/User").User} User
 * */
import CN from "Lib/Cn";
import ChatroomNavbar from "./_chatroom_navbar";

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
      <main className={CN("w-full bg-offWhite", className)}>
        <ChatroomNavbar
          imageName={
            chatRoomObj.isGroupChat
              ? "default-group.webp"
              : chatRoomObj.participants[0].avatarPic
          }
          name={chatRoomObj.groupName || chatRoomObj.participants[0].name}
          toggleSideBar={toggleSideBar}
        />
      </main>
    </>
  );
};

export default Chatroom;
