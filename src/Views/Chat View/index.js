import { useEffect, useState, createContext } from "react";
import { User } from "Lib/User.ts";

import Sidebar from "./sidebar";

export const materialContext = createContext();

const ChatView = () => {
  /**
   *  @type {[User,Function]}
   */
  const [mainU, setMainU] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    const uid = params.get("uid");
    const user = new User();

    // Initilize Data
    const userData = async () => {
      await user.initialize(uid);
      setMainU(user);
    };

    userData();
  }, []);

  if (!mainU) {
    return <div>Loading data...</div>;
  }

  console.log(mainU.chatRoomList[1].participants[0].username);

  return (
    <>
      <materialContext.Provider value={{ mainU, setMainU }}>
        <main>
          <Sidebar />
        </main>
      </materialContext.Provider>
    </>
  );
};

export default ChatView;
