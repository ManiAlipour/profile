import { useState } from "react";
import "./index.css";
import {
  FaCopy,
  FaGithub,
  FaInstagram,
  FaShare,
  FaTelegram,
} from "react-icons/fa";
import Toast from "../tostify";

const AboutMe = () => {
  // state text in input field
  const [text, setText] = useState("");

  // copy the text to the clipboard and show the toast
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    Toast({ text: "text copied to clipboard successfully" });
  };

  // Share link
  const handleShare = () => {
    navigator.share({
      title: "Share",
      url: text,
      text: "text",
    });
  };

  return (
    <>
      <div className="container">
        <div className="black-cover"></div>
        <img
          className="profile animate__animated animate__fadeInBottomLeft"
          src={require("../images/pic.jpg")}
          alt=""
        />
        <p className="im">
          <span className="im-span animate__animated animate__fadeInDown">
            Im
          </span>
        </p>
        <p className="name-container">
          <span className="fname animate__animated animate__fadeInLeft">
            Mani
          </span>{" "}
          <span className="lname  animate__animated animate__fadeInRight">
            AliPour
          </span>
        </p>
        <div className="btn-bar">
          <div className="flex-btn">
            <button onClick={() => setText("https://github.com/")}>
              <FaGithub />
            </button>
            <button
              onClick={() => {
                setText("https://instagram.com/");
              }}
            >
              <FaInstagram />
            </button>
            <button onClick={() => setText("https://te.me/")}>
              <FaTelegram />
            </button>
          </div>
        </div>
        <div className="input-link">
          <input
            placeholder="url..."
            value={text}
            type="text"
            readOnly
            name=""
            className="input"
          />
          <div>
            <button onClick={handleShare}>
              <FaShare />
            </button>
            <button onClick={handleCopy}>
              <FaCopy />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
