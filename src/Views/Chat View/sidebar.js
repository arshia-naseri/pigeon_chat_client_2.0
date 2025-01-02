import { useContext, useRef } from "react";
import { materialContext } from "./index";
import CN from "Lib/Cn";
import SidebarNavbar from "./_sidebar_navbar";
import SidebarChatroomList from "./_sidebar_chatroom_list";

/**
 * @typedef {import("Lib/User").User} User
 * */

const Sidebar = ({ className }) => {
  const sidebarRef = useRef();
  /**
   * @type {{ user: User }}
   */
  const context = useContext(materialContext);
  const { user } = context;

  const chatRoomClicked = (e) => {
    const target = /** @type {HTMLElement} */ (e.currentTarget);
    const children = target.parentElement.children;

    for (let child of children) {
      child.id = "";
    }
    target.id = "chatroomSelect";
  };

  return (
    <>
      <main
        ref={sidebarRef}
        className={CN(
          "relative flex flex-col border-r border-r-slate-400/30 bg-primaryPurple *:shrink-0",
          className,
        )}
      >
        <SidebarNavbar
          name={user.name}
          username={user.username}
          avatarPic={user.avatarPic}
        />
        <SidebarChatroomList chatRoomClicked={chatRoomClicked} />
      </main>
    </>
  );
};

export default Sidebar;
