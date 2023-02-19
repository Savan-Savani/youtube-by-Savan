import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/gePhjvKdUro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPNcBn072DXPi3Aiqs04WrOjSrjQ" alt="" />
        <span>05:43</span>
      </div>
      <div className="video__title">
        Craete app in 5 minutes #made by jdsjdf nfdksjfkjds fdkj
      </div>
      <div className="video__details">
        <span>
          <AiFillEye />
          5m views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/ytc/AL5GRJXvWF9Y4mRniupp2yTeVFPHI1TO6wgVp4IrCCAHGQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <p>Rainbow sndja asdkj</p>
      </div>
    </div>
  );
};

export default Video;
