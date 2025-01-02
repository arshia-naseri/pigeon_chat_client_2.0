import { useContext } from "react";
import { materialContext } from "./index";
import ProfilePicComponent from "Components/profile_pic_component";

/**
 * @typedef {import("Lib/User").User} User
 * */
const SidebarChatroomList = ({ chatRoomClicked }) => {
  /**
   * @type {{ user: User }}
   */
  const context = useContext(materialContext);
  const { user } = context;

  return (
    <>
      <section className="flex flex-1 flex-col overflow-scroll">
        {user.chatRoomList.map((chatRoomItem, index) => {
          return (
            <section
              key={chatRoomItem._id}
              data-chatroom-id={chatRoomItem._id}
              onClick={chatRoomClicked}
              onTouchStart={chatRoomClicked}
              className="before:bg-primaryPurpleLight_half/80 group relative flex w-full items-center gap-3 px-3 py-5 before:pointer-events-none before:invisible before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[85%] after:-translate-x-[50%] after:bg-slate-500/35 after:last:hidden hover:cursor-pointer hover:before:visible sm:before:w-[98%]"
            >
              <ProfilePicComponent
                className="w-20 shrink-0 border border-black/20 shadow-none"
                imageName={
                  chatRoomItem.isGroupChat
                    ? "default-group.webp"
                    : chatRoomItem.participants[0].avatarPic
                }
              />
              <div className="truncate text-2xl font-bold">
                {chatRoomItem.isGroupChat
                  ? chatRoomItem.groupName
                  : chatRoomItem.participants[0].name}
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default SidebarChatroomList;
