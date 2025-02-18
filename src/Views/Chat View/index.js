import { useEffect, useState, createContext } from "react";
import { User } from "Lib/User.ts";

import Sidebar from "./sidebar";
import ChatRoom from "./chatroom";
import { io } from "socket.io-client";

export const materialContext = createContext();
const socket = io(process.env.REACT_APP_SOCKET_SERVER);

const ChatView = () => {
  /**
   *  @type {[User,Function]}
   */
  const [user, setUser] = useState(null);
  const [showSideBar, setShowSideBar] = useState(true);
  const [selectedChatRoomID, setSelectedChatRoomID] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    const uid = params.get("uid");
    const tempUser = new User();

    // Initilize Data
    const userData = async () => {
      await tempUser.initialize(uid, socket);
      setUser(tempUser);
    };

    userData();
  }, []);

  if (!user) {
    return <div>Loading data...</div>;
  }

  const toggleSideBar = () => {
    setShowSideBar((pre) => {
      const selectElm = document.getElementById("chatroomSelect");
      if (selectElm && window.innerWidth <= 640) {
        selectElm.id = "";
      }
      return !pre;
    });
  };

  return (
    <>
      <materialContext.Provider value={{ user, setUser }}>
        <main className="flex h-svh w-full overflow-hidden *:h-svh sm:relative sm:h-full">
          <Sidebar
            toggleSideBar={toggleSideBar}
            setSelectedChatRoomID={setSelectedChatRoomID}
            className={` ${!showSideBar ? "-left-full" : "left-0"} absolute z-10 w-full transition-all duration-200 sm:relative sm:left-0 sm:w-[35%] sm:min-w-[22rem]`}
          />
          <ChatRoom
            selectedChatRoomID={selectedChatRoomID}
            toggleSideBar={toggleSideBar}
            className="z-0 w-full sm:w-[65%]"
          />
        </main>
      </materialContext.Provider>
    </>
  );
};

export default ChatView;
