import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Tailored Conversations for Your Business: Meet ConvoCraft!",
        1000,
        "Crafting Personalized Chat Experiences: Introducing ConvoCraft",
        2000,
        "Elevate Your Business Communication with ConvoCraft",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "40px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
