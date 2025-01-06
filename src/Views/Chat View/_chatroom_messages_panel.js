import TextBubble from "Components/text_bubble";
import { useState } from "react";
import CN from "Lib/Cn";

/**
 *
 * @param {{ messages: { from: RelatedUser; text: string; time: Date }[] }} props
 */

const ChatroomMessagesPanel = ({ messages, className }) => {
  const [usernameMessage, setUsernameMessage] = useState("");

  return (
    <>
      <section className={CN("overflow-scroll", className)}>
        <section>
          {messages.map((messageItem, index) => {
            return (
              // Message
              <section className="w-fit rounded-xl bg-red-300 p-3" key={index}>
                <div
                  onClick={(e) => console.log(e.currentTarget.innerHTML)}
                  dangerouslySetInnerHTML={{
                    __html: messageItem.text.replace(/\\n/g, "<br/>"),
                  }}
                />
                <div></div>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default ChatroomMessagesPanel;
