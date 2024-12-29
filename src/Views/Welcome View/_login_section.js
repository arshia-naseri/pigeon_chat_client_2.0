import mainLogo from "Assets/Images/Avatars/bird_main.webp";
import TextBox from "Components/my_textBox";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSection = ({ goToSignup }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const LoginForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      username: e.currentTarget.elements["username"].value.trim(),
      password: e.currentTarget.elements["password"].value,
    };
    axios
      .post(process.env.REACT_APP_LOGIN_API_URL, data)
      .then((res) => {
        console.log(res.data);
        navigate(`/chat?uid=${res.data}`);
      })
      .catch((error) => {
        const msg = error.response.data.error;
        alert(msg);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <main className="relative left-0 flex flex-col items-center justify-around overflow-y-auto">
        <img
          src={mainLogo}
          alt="main logo"
          className="mt-8 aspect-auto w-[30%]"
        />
        <div className="font-cartoonish text-offWhite text-shadow-md text-3xl">
          Welcome to PigeonChat
        </div>
        <form
          onSubmit={LoginForm}
          className="relative flex w-[70%] flex-col items-center gap-7 *:w-full"
        >
          <TextBox label="Username" name="username" type="text" />
          <TextBox label="Password" name="password" type="password" />
          <input
            type="submit"
            disabled={isLoading ? true : false}
            value={isLoading ? "..." : "Login"}
            className="bg-primaryPurpleLight hover:text-offWhite !w-3/5 rounded-full px-1 py-2 font-semibold shadow-md hover:cursor-pointer hover:bg-primaryPurpleDark disabled:bg-slate-300 disabled:text-slate-500 disabled:hover:cursor-not-allowed"
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
