import CN from "Lib/Cn";

const Chatbar = ({ className, setShowSideBar }) => {
  return (
    <>
      <main className={CN("bg-offWhite", className)}>
        <div>Select Chat</div>
        <button onClick={() => setShowSideBar((pre) => !pre)}>Go back</button>
      </main>
    </>
  );
};

export default Chatbar;
