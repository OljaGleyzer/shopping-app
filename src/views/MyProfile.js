import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import avatar from "./avatar.png";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useEffect } from "react";

function MyProfile() {
  const { user, logout, checkUserStatus, userName, setUserName } =
    useContext(AuthContext);
  const redirectTo = useNavigate();

  useEffect(() => {
    console.log("user :>> ", user);
  }, [user]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
    console.log("setUserName", e.target.value);
  };

  const handleUserName = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    updateProfile(user, {
      displayName: userName,
    })
      .then(() => {
        console.log("Profile updated");
        checkUserStatus();
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  return (
    <div className="container text-center">
      <img src={avatar} alt="avatarProfile" />
      <h1> Welcome {user.displayName}</h1>

      <h2> Personal Information</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.displayName}</p>
      <h2>Account Settings</h2>

      <form>
        <label>
          Change Username:
          <br />
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleNameChange}
          />
          <button className="username-button" onClick={handleUserName}>
            Submit
          </button>
        </label>
        <br />
        {/* <label>
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
        <br /> */}
      </form>

      {/* <h2>Your Orders</h2> */}
      <h2>Wishlist </h2>
    </div>
  );
}

export default MyProfile;
