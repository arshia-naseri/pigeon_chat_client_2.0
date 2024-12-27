import mainLogo from "Assets/Images/Avatars/bird_main.webp";
import TextBox from "Components/my_textBox";

const LoginSection = () => {
  return (
    <>
      <main className="relative left-0 flex flex-col items-center gap-5">
        <img src={mainLogo} alt="main logo" className="aspect-auto w-[30%]" />
        <div className="font-cartoonish text-offWhite text-shadow-md text-3xl">
          Welcome to PigeonChat
        </div>
        <form className="relative mt-auto flex w-4/5 flex-col items-center gap-7 *:w-full">
          <TextBox label="Username" name="username" />
          <TextBox label="Password" name="password" isPassword={true} />
          <input
            type="submit"
            value="Login"
            className="bg-primaryPurpleLight hover:text-offWhite !w-3/5 rounded-full px-1 py-2 font-semibold shadow-md hover:cursor-pointer hover:bg-primaryPurpleDark"
          />
        </form>
        <section className="mt-10 text-sm">
          Don't have an account?{" "}
          <b className="hover:cursor-pointer hover:text-primaryPurpleDark">
            Sign Up
          </b>
        </section>
      </main>
    </>
  );
};

export default LoginSection;
