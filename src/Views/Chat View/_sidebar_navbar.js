import ProfilePicComponent from "Components/profile_pic_component";

const SidebarNavbar = ({ name, username, avatarPic }) => {
  return (
    <section>
      <nav className="bg-primaryPurpleDark2 flex h-20 w-full items-center overflow-hidden px-3">
        <ProfilePicComponent
          imageName={avatarPic}
          className="bg-primaryPurpleLight_half h-[60%] shadow-none sm:h-[70%]"
        />
        <section className="mx-3 min-w-0 flex-1 text-sm text-offWhite sm:text-base">
          <div title={name} className="truncate text-2xl font-bold">
            {name}
          </div>
          <div title={"@" + username}>@{username}</div>
        </section>

        <section className="*:bg-primaryPurpleLight_half flex gap-2 *:size-9 *:rounded-[50%] [&>*>img]:mx-auto [&>*>img]:!p-1">
          <button className="active:bg-primaryPurpleDark">
            <img
              className="w-[90%]"
              src={require("Assets/Images/gear.png")}
              alt="settings logo"
            />
          </button>
          <button className="active:bg-primaryPurpleDark">
            <img
              className="w-[95%]"
              src={require("Assets/Images/contacts.png")}
              alt="settings logo"
            />
          </button>
          <button className="active:bg-primaryPurpleDark">
            <img
              src={require("Assets/Images/new-message.png")}
              alt="settings logo"
            />
          </button>
        </section>
      </nav>
    </section>
  );
};

export default SidebarNavbar;
