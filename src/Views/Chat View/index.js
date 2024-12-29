import { useEffect } from "react";

const ChatView = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    const uid = params.get("uid");

    console.log(uid);
  }, []);

  return (
    <>
      <div>Chat Page</div>
    </>
  );
};

export default ChatView;
