import mainLogo from "Assets/Images/Avatars/bird_main.webp";
import TextBox from "Components/my_textBox";

const LoginSection = ({ goToSignup }) => {
  return (
    <>
      <main className="relative left-0 flex flex-col items-center justify-around">
        <img
          src={mainLogo}
          alt="main logo"
          className="mt-8 aspect-auto w-[30%]"
        />
        <div className="font-cartoonish text-offWhite text-shadow-md text-3xl">
          Welcome to PigeonChat
        </div>
        <form className="relative flex w-[70%] flex-col items-center gap-7 *:w-full">
          <TextBox label="Username" name="username" type="text" />
          <TextBox label="Password" name="password" type="password" />
          <input
            type="submit"
            value="Login"
            className="bg-primaryPurpleLight hover:text-offWhite !w-3/5 rounded-full px-1 py-2 font-semibold shadow-md hover:cursor-pointer hover:bg-primaryPurpleDark"
          />
        </form>
        <section className="text-sm">
          Don't have an account?{" "}
          <button>
            <b
              className="hover:cursor-pointer hover:text-primaryPurpleDark"
              onClick={goToSignup}
            >
              Sign Up
            </b>
          </button>
        </section>
      </main>
    </>
  );
};

export default LoginSection;
