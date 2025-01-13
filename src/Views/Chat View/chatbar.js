import CN from "Lib/Cn";
import { useState } from "react";
const Chatbar = ({
  bottomScrollChat,
  className,
  maxLineNo = 4,
  sendMessageForm,
}) => {
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  return (
    <form
      onSubmit={sendMessageForm}
      className={CN(
        "flex gap-2 p-3 *:h-10 *:border-[0.7px] *:border-solid *:border-black/50",
        className,
      )}
    >
      <textarea
        name="text"
        rows="1"
        placeholder="Spill your beans ..."
        className="mt-auto box-border w-full select-none resize-none overflow-auto rounded-xl p-2 text-lg caret-primaryPurpleDark outline-none"
        onInput={(e) => {
          setIsBtnDisable(e.currentTarget.value.trim().length === 0);
          const lineHeight = parseInt(
            window.getComputedStyle(e.currentTarget).lineHeight,
          );
          const numberOfLines = Math.floor(
            e.currentTarget.scrollHeight / lineHeight,
          );

          if (numberOfLines > maxLineNo) return;

          e.currentTarget.style.height = "auto";
          e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";

          bottomScrollChat();
        }}
      />
      <button
        type="submit"
        disabled={isBtnDisable}
        className={CN(
          "mt-auto flex aspect-square rounded-lg bg-primaryPurpleDark",
          isBtnDisable &&
            "transform-none bg-slate-400 disabled:cursor-not-allowed",
        )}
      >
        <img
          src={require("Assets/Images/send-icon white.webp")}
          className={CN(
            "text-shad m-auto size-1/2 select-none",
            isBtnDisable && "opacity-50",
          )}
          alt="send logo"
        />
      </button>
    </form>
  );
};

export default Chatbar;
