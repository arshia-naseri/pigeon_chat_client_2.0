import ProfilePic from "Components/profile_pic_component";
import TextBox from "Components/my_textBox";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupSection = ({
  goToLogin,
  gotToProfileImageSection,
  selectedProfilePic,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const SignupForm = (e) => {
    e.preventDefault();

    const data = {
      avatarPic: selectedProfilePic,
      name: e.currentTarget.elements["name"].value.trim(),
      username: e.currentTarget.elements["username"].value.trim(),
      password: e.currentTarget.elements["password"].value,
    };

    if (data.name.length < 1) {
      alert("Name was not entered");
      return;
    }
    if (data.username.length < 1) {
      alert("Username was not entered");
      return;
    }
    if (data.password.length < 1) {
      alert("Password was not entered");
      return;
    }

    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_SIGNUP_API_URL, data)
      .then((res) => {
        const dataType = res.data.substring(0, 2);
        if (dataType === "m-") {
          alert(res.data.slice(2));
        } else {
          console.log(res.data);
          navigate(`/chat?uid=${res.data}`);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
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
          <form
            className="flex w-[70%] flex-col items-center gap-6 *:w-full"
            onSubmit={SignupForm}
          >
            <TextBox label="Your Name" name="name" />
            <TextBox label="Username" name="username" />
            <TextBox label="Password" type="password" />
            <input
              type="submit"
              disabled={isLoading ? true : false}
              value={isLoading ? "..." : "Create"}
              className="bg-primaryPurpleLight hover:text-offWhite mt-7 !w-5/6 rounded-full px-1 py-2 font-semibold shadow-md hover:cursor-pointer hover:bg-primaryPurpleDark disabled:bg-slate-300 disabled:text-slate-500 disabled:hover:cursor-not-allowed"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default SignupSection;
