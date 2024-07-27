import React from "react";
import Tick from "../../../assets/double-check.png";

const NotificationsHeader = () => {
  return (
    <div className="flex items-center justify-between w-full mb-4">
      <div className="flex items-center w-full justify-between px-2">
        <h2 className="font-bold text-yellow text-[20px]">
          Your Notifications
        </h2>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={Tick} alt="Tick icon" className="w-6 h-6" />
          <h3 className="text-blue">Mark all as read</h3>
        </div>
      </div>
    </div>
  );
};

export default NotificationsHeader;
