import { useEffect, useState } from "react";
import { User } from "Lib/User.ts";

const ChatView = () => {
  // const mainU = new User();
  /**
   *  @type {[User,Function]}
   */
  const [mainU, setMainU] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    const uid = params.get("uid");
    const user = new User();

    const userData = async () => {
      await user.getUserData(uid);
      user.getChatRoomList();
      setMainU(user);
    };

    userData();
  }, []);

  if (!mainU) {
    return <div>Loading user data...</div>;
  }

  console.log(mainU);

  return (
    <>
      <div>Chat Page</div>
    </>
  );
};

export default ChatView;
