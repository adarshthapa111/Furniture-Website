import React from "react";
import { Dropdown, DropdownTrigger, DropdownContent } from '../components/ui/dropdown-menu';

const ProfileDropdown = () => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <img
            src="/img/iuser.png"
            className="h-7 w-7"
            height={40}
            width={25}
          />
        </DropdownTrigger>
        <DropdownContent side="bottom" align="end">
          <ul>
            <li>
              <a href="/Profile">Profile</a>
            </li>
            <li>
              <a href="/Settings">Settings</a>
            </li>
            <li>
              <a href="/Logout">Logout</a>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;
