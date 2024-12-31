import { useEffect, useState } from "react";
import { User } from "Lib/User.ts";

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
      <div>Chat Page</div>
    </>
  );
};

export default ChatView;
