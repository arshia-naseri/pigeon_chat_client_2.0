const SignupSection = ({ goToLogin }) => {
  return (
    <>
      <main className="relative left-full">
        <button
          className="text-offWhite text-shadow-md text-sm font-bold"
          onClick={goToLogin}
        >
          Back to Login
        </button>
        <section></section>
      </main>
    </>
  );
};

export default SignupSection;
