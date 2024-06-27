import React from "react";
import attach from "../img/attach.png";
import img from "../img/img.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type a message...." />
      <div className="send">
        <img src={img} alt="" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
