import CN from "Lib/Cn";

const TextBubble = ({ user, text, time, className = "", isMainU }) => {
  return (
    <section
      className={CN(
        "relative w-fit rounded-xl p-3 text-base",
        className,
        isMainU ? "ml-auto bg-primaryPurpleLight_half" : "bg-primaryPurple",
      )}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      {/* Time */}
      <div className="ml-auto w-fit text-xs text-slate-700">{time}</div>
      {/* Triangle */}
      <div
        data-message-bubble-triangle={user}
        className={CN(
          "absolute top-full -z-10 size-4 -translate-y-full",
          isMainU
            ? "right-0 translate-x-[25%] bg-primaryPurpleLight_half"
            : "left-0 -translate-x-[25%] bg-primaryPurple",
        )}
        style={{
          clipPath: isMainU
            ? "polygon(0 0, 0% 100%, 100% 100%)"
            : "polygon(100% 0, 0% 100%, 100% 100%)",
        }}
      />
    </section>
  );
};

export default TextBubble;
