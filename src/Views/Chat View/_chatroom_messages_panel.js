import TextBubble from "Components/text_bubble";
import { useEffect } from "react";
import ProfilePicComponent from "Components/profile_pic_component";
import CN from "Lib/Cn";

/**
 *
 * @param {{ messages: { from: RelatedUser; text: string; time: Date }[] }} props
 */

const ChatroomMessagesPanel = ({
  messages,
  className,
  isChatRoom,
  mainUsername,
}) => {
  /**
   * @param {Date} messageDate
   */
  const getDateTitle = (messageDate) => {
    let now = new Date();
    if (now.toLocaleDateString() === messageDate.toLocaleDateString())
      return "Today";
    const dif = (now - messageDate) / (1000 * 60 * 60 * 24);
    if (dif === 1) return "Yesterday";
    return messageDate.toDateString();
  };

  useEffect(() => {
    // Remove similar dates
    const elms = document.getElementsByClassName("dateBanner");
    let prevDate = "";
    for (let elm of elms) {
      if (prevDate === elm.innerHTML) {
        elm.style.display = "none";
      } else {
        prevDate = elm.innerHTML;
      }
    }
  }, []);

  return (
    <>
      <section className={CN("overflow-scroll px-3", className)}>
        <section className="flex flex-col">
          {messages.map((messageItem, index) => {
            messageItem.time = new Date(messageItem.time);
            return (
              //Container
              <section key={index}>
                {/* Date Banner */}
                <div
                  data-date-banner={index}
                  className="dateBanner mx-auto mt-3 w-fit rounded-3xl bg-slate-300 px-3"
                >
                  {getDateTitle(messageItem.time)}
                </div>

                <section className="my-2 flex gap-[.4rem]">
                  {mainUsername !== messageItem.from.username && isChatRoom && (
                    <ProfilePicComponent
                      imageName={messageItem.from.avatarPic}
                      className="mt-auto size-[3rem] border-[0.5px] border-black/5 bg-primaryPurpleLight_half shadow-none"
                    />
                  )}
                  <section className="flex-1">
                    {isChatRoom &&
                      mainUsername !== messageItem.from.username && (
                        <div className="text-xs text-slate-700">
                          {messageItem.from.name}
                        </div>
                      )}
                    <TextBubble
                      text={messageItem.text.replace(/\\n/g, "<br/>")}
                      time={messageItem.time.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      isMainU={
                        mainUsername === messageItem.from.username
                          ? true
                          : false
                      }
                    />
                  </section>
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default ChatroomMessagesPanel;
