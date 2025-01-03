import ProfilePicComponent from "Components/profile_pic_component";
const ChatroomNavbar = ({ imageName, name, toggleSideBar }) => {
  return (
    <>
      <nav className="bg-primaryPurpleDark2 relative flex h-20 w-full items-center overflow-hidden px-3">
        <button
          type="button"
          className="relative block w-10 shrink-0 rounded sm:hidden"
          onClick={() => toggleSideBar()}
          onTouchStart={() => toggleSideBar()}
        >
          <img
            className="w-full"
            src={require("Assets/Images/arrow-back-white.png")}
            alt="arrow back"
          />
        </button>
        <ProfilePicComponent
          imageName={imageName}
          className="ml-2 h-[70%] shrink-0 shadow-none"
        />
        <div
          className="ml-2 mr-2 flex-1 truncate font-sans text-3xl font-bold text-white"
          title={name}
        >
          {name}
        </div>
        <button className="ml-auto flex h-full shrink-0 text-5xl text-white">
          ...
        </button>
      </nav>
    </>
  );
};

export default ChatroomNavbar;
