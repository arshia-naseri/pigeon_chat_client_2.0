import { useContext } from "react";
import { materialContext } from "./index";

/** @typedef {import("Lib/User").User} User */

const Sidebar = () => {
  /**
   * @type {{ mainU: User, setMainU: Function }}
   */
  const context = useContext(materialContext);
  const { mainU, setMainU } = context;
  return (
    <>
      <div>{mainU}</div>
    </>
  );
};

export default Sidebar;
