import React from "react";
//import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";

const Profile = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Profile
      </button>
      <div
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuButton"
      >
        <a class="dropdown-item" href="#">
          Action
        </a>
        <a class="dropdown-item" href="#">
          Another action
        </a>
        <a class="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
};
export default Profile;
