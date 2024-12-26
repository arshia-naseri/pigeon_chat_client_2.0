import LoginSection from "./_login_section";
import SignupSection from "./_signup_sections";
import ProfileImageSection from "./_profileImage_section";

const WelcomePage = () => {
  return (
    <main className="flex h-svh w-full items-center bg-[#F5F5F5]">
      <section className="relative mx-auto flex h-full w-full overflow-hidden rounded-xl bg-primaryPurple *:absolute *:h-full *:w-full *:p-3 sm:h-[38rem] sm:max-h-[80vh] sm:min-h-[25rem] sm:w-[30rem]">
        <LoginSection />
        <SignupSection />
        <ProfileImageSection />
      </section>
    </main>
  );
};

export default WelcomePage;
