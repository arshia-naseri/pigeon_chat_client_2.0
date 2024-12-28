import CN from "Lib/Cn";
const ProfilePicComponent = ({
  imageName,
  changable = false,
  ext = ".webp",
  imgAddClass = "",
  className = "",
  onClick = () => {},
}) => {
  return (
    <>
      <section
        className={CN(
          "bg-primaryPurpleLight group relative flex aspect-square items-center justify-center rounded-full border shadow-md shadow-primaryPurpleDark hover:scale-[1.04] hover:cursor-pointer",
          className,
        )}
        onClick={onClick}
      >
        {changable && (
          <div className="pointer-events-none invisible z-20 flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-25 group-hover:visible">
            <img
              src={require("Assets/Images/pen.png")}
              className="aspect-auto w-1/2 opacity-90"
              alt="pen"
            />
          </div>
        )}
        <img
          loading="lazy"
          className={CN("absolute w-[60%]", imgAddClass)}
          src={require("Assets/Images/Avatars/" + imageName + ext)}
          alt={imageName + ext}
        />
      </section>
    </>
  );
};

export default ProfilePicComponent;
