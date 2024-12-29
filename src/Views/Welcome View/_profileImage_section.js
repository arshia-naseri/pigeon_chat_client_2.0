import ProfilePic from "Components/profile_pic_component";
import { useRef } from "react";
const ProfileImageSection = ({ goToSignup, setSelectedProfilePic }) => {
  const avatarContainer = useRef();

  const avatarList = [
    "bird_main.webp",
    "bird_girl.webp",
    "bird_glasses.webp",
    "bird_afro.webp",
    "bird_french.webp",
    "dog.webp",
    "fox.webp",
    "ghost.webp",
    "bear.webp",
    "bee.webp",
    "cat.webp",
    "snowman.webp",
  ];

  const avatarClick = (e) => {
    const children = avatarContainer.current.children;
    for (let child of children) {
      child.id = "";
    }

    // ? Look @ global_style.css "profilePicSelectorHalo"
    e.currentTarget.id = "profilePicSelectorHalo";
    setSelectedProfilePic(e.currentTarget.getAttribute("data-image-name"));
  };

  return (
    <>
      <main className="item-center relative left-[200%] flex flex-col justify-around overflow-y-auto">
        <section
          className="grid grid-cols-3 gap-2 sm:gap-4"
          ref={avatarContainer}
        >
          {avatarList.map((imageName, index) => (
            <ProfilePic
              key={index}
              imageName={imageName}
              id={index === 0 ? "profilePicSelectorHalo" : ""}
              onClick={avatarClick}
              className="mx-auto w-2/3 border-none bg-transparent shadow-none hover:scale-[1.04] hover:cursor-pointer"
            />
          ))}
        </section>
        <button
          className="bg-primaryPurpleLight mx-auto flex h-10 w-10 items-center justify-center rounded-2xl border-primaryPurpleDark p-3 text-3xl text-black shadow-xl hover:bg-primaryPurpleDark"
          onClick={goToSignup}
        >
          ✔
        </button>
      </main>
    </>
  );
};

export default ProfileImageSection;
