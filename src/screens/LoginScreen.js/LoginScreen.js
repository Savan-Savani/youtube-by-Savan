import React from "react";
import "./_loginScreen.scss"

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button>Login with Google</button>
        <p>This project is made using youtube data api</p>
      </div>
    </div>
  );
};

export default LoginScreen;
