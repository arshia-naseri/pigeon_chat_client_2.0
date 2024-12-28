import ProfilePic from "Components/profile_pic_component";
import TextBox from "Components/my_textBox";

const SignupSection = ({
  goToLogin,
  gotToProfileImageSection,
  selectedProfilePic,
}) => {
  return (
    <>
      <main className="relative left-full overflow-y-scroll">
        <button
          className="text-offWhite text-shadow-md absolute text-sm font-bold"
          onClick={goToLogin}
        >
          Back to Login
        </button>
        <section className="flex h-[80%] w-full flex-col items-center justify-around sm:h-full">
          <section className="relative flex w-full items-center justify-center">
            <ProfilePic
              imageName={selectedProfilePic}
              changable={true}
              className="w-[30%] hover:scale-[1.04] hover:cursor-pointer"
              onClick={gotToProfileImageSection}
            />

            <img
              src={require("Assets/Images/info text.png")}
              alt="Instruction Tip"
              className="absolute right-0 aspect-auto w-32"
            />
          </section>
          <div className="font-cartoonish text-offWhite text-shadow-sm text-2xl font-bold sm:text-3xl">
            Make Your Own Account
          </div>
          <form className="flex w-[70%] flex-col items-center gap-6 *:w-full">
            <TextBox label="Your Name" name="name" />
            <TextBox label="Username" />
            <TextBox label="Password" type="password" />
            <input
              type="submit"
              value="Create"
              className="bg-primaryPurpleLight hover:text-offWhite mt-7 !w-5/6 rounded-full px-1 py-2 font-semibold shadow-md hover:cursor-pointer hover:bg-primaryPurpleDark"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default SignupSection;
