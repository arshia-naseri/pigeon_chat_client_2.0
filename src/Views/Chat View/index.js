import { useEffect, useState, createContext } from "react";
import { User } from "Lib/User.ts";

import Sidebar from "./sidebar";
import Chatbar from "./chatbar";

export const materialContext = createContext();

const ChatView = () => {
  /**
   *  @type {[User,Function]}
   */
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    const uid = params.get("uid");
    const tempUser = new User();

    // Initilize Data
    const userData = async () => {
      await tempUser.initialize(uid);
      setUser(tempUser);
    };

    userData();
  }, []);

  if (!user) {
    return <div>Loading data...</div>;
  }

  return (
    <>
      <materialContext.Provider value={{ user, setUser }}>
        <main className="flex h-svh w-full overflow-hidden bg-yellow-100 *:h-svh sm:relative sm:h-full">
          <Sidebar className="absolute z-10 w-full sm:relative sm:w-[35%] sm:min-w-[22rem]" />
          <Chatbar className="z-0 w-full sm:w-[65%]" />
        </main>
      </materialContext.Provider>
    </>
  );
};

export default ChatView;
