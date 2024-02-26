import React from "react";
import './settings.css'
import { FaRegCircleUser } from "react-icons/fa6";

const Settings =()=>{
    return(
        <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <h1 className="settingsTitleUpdate">Update Your Account</h1>
           <h1 className="settingsTitleDelete">Delete Your Account</h1>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
              <label htmlFor="fileInput">
                <i className="settingsPPIcon "><FaRegCircleUser /></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Name" name="name" required/>
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com" name="email" required/>
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" required />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        
      </div>
    )
}
export default Settings;