import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import avatar from "./avatar.png";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const { userName, user, logout } = useContext(AuthContext);
  const redirectTo = useNavigate();

  if (!userName) {
    redirectTo("/login");
  }

  return (
    <div className="container text-center">
      <img src={avatar} alt="avatarProfile" />
      <h1> Welcome {user.userName}</h1>

      <h2> Personal Information</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.userName}</p>
      <h2>Account Settings</h2>

      <form>
        <label>
          Change Username:
          <br />
          <input type="text" id="username" name="username" />
        </label>
        <br />
        <label>
          Change Password:
          <br />
          <input type="password" id="password" name="password" />
        </label>
        <br />
        <label>
          Change Email:
          <br />
          <input type="email" id="email" name="Email" />
        </label>
        <br />
      </form>

      <h2>Your Orders</h2>
      <h2>Wishlist </h2>
    </div>
  );
}

export default MyProfile;
