import ProfilePicComponent from "Components/profile_pic_component";

const SidebarNavbar = ({ name, username, avatarPic }) => {
  return (
    <>
      <nav className="bg-primaryPurpleDark2 [min-w] flex h-28 w-full items-center overflow-hidden px-3">
        <ProfilePicComponent
          imageName={avatarPic}
          className="bg-primaryPurpleLight_half h-[70%] shadow-none"
        />
        <section className="mx-3 min-w-0 flex-1 text-base text-offWhite">
          <div className="truncate text-3xl font-bold">{name}</div>
          <div>@{username}</div>
        </section>

        <section className="*:bg-primaryPurpleLight_half flex gap-2 *:size-11 *:rounded-[50%] [&>*>img]:mx-auto [&>*>img]:!p-1">
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
    </>
  );
};

export default SidebarNavbar;
