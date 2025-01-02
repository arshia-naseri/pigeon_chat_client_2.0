import CN from "Lib/Cn";
const ProfilePicComponent = ({
  imageName,
  changable = false,
  imgAddClass = "",
  className = "",
  id = "",
  onClick = () => {},
  loading = "eager",
}) => {
  return (
    <>
      <section
        className={CN(
          "group relative flex aspect-square items-center justify-center rounded-full border bg-primaryPurpleLight shadow-md shadow-primaryPurpleDark",
          className,
        )}
        id={id}
        onClick={onClick}
        onTouchStart={onClick}
        data-image-name={imageName}
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
          loading={loading}
          className={CN("absolute w-[63%]", imgAddClass)}
          src={require("Assets/Images/Avatars/" + imageName)}
          alt={imageName}
        />
      </section>
    </>
  );
};

export default ProfilePicComponent;
