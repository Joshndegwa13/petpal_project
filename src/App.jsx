import React from "react";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";
import ForgotPassword from "./components/ForgotPassword";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  return (
    <div>
      <LogIn />
      <Registration />
      <ForgotPassword />
      <ProfileSettings />
    </div>
  )
}

export default App