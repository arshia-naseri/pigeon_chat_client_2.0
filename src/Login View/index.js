import LoginSection from "./_login_section";
import SignupSection from "./_signup_sections";
import ProfileImageSection from "./_profileImage_section";
import { useRef } from "react";

const WelcomePage = () => {
  const welcomeContainer = useRef();

  return (
    <main className="flex h-svh w-full items-center">
      <section
        className="relative mx-auto flex h-full w-full flex-none shrink-0 overflow-hidden rounded-xl bg-primaryPurple *:absolute *:h-full *:w-full *:p-3 sm:h-[35rem] sm:w-[30rem]"
        ref={welcomeContainer}
      >
        <LoginSection
          goToSignup={() =>
            welcomeContainer.current.scrollTo({
              left: welcomeContainer.current.offsetWidth,
              behavior: "smooth",
            })
          }
        />
        <SignupSection
          goToLogin={() =>
            welcomeContainer.current.scrollTo({
              left: -welcomeContainer.current.offsetWidth,
              behavior: "smooth",
            })
          }
          gotToProfileImageSection={() =>
            welcomeContainer.current.scrollTo({
              left: welcomeContainer.current.offsetWidth * 2,
              behavior: "smooth",
            })
          }
        />
        <ProfileImageSection />
      </section>
    </main>
  );
};

export default WelcomePage;
