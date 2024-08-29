import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate.push("/"); // Redirect to registration page
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Password: {userData.password}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>No user data found. Please register.</p>
      )}
    </div>
  );
}

export default Profile;
