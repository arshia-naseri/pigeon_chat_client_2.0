import { useContext } from "react";
import { materialContext } from "./index";
import CN from "Lib/Cn";
import SidebarNavbar from "./_sidebar_navbar";

/** @typedef {import("Lib/User").User} User */

const Sidebar = ({ className }) => {
  /**
   * @type {{ user: User }}
   */
  const context = useContext(materialContext);
  const { user } = context;
  return (
    <>
      <main
        className={CN(
          "relative border-r border-r-slate-400/30 bg-primaryPurple",
          className,
        )}
      >
        <SidebarNavbar
          name={user.name}
          username={user.username}
          avatarPic={user.avatarPic}
        />
      </main>
    </>
  );
};

export default Sidebar;
