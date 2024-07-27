import React from "react";
import { NotificationsData } from "../../../Data/NotificationsData";

const NotificationsDesc = () => {
  return (
    <div className="">
      {NotificationsData.map((notifications, id) => {
        return (
          <div className="flex justify-between items-center mb-8">
            <div className="flex justify-between items-center gap-[10px] ml-6">
              <img
                src={notifications.img}
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <div className="flex gap-1">
                <div className="font-bold text-[16px] text-yellow">
                  @{notifications.userId}
                </div>
                <span>{notifications.content}</span>
              </div>
              <div className="flex justify-between gap-[400px] mr-6">
                <span>{notifications.time}</span>
                <span>{notifications.timeAgo}</span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex items-center ml-[89px] gap-4">
        <button className="button bg-red-500">Decline</button>
        <button className="button hover:bg-blue">Accept</button>
      </div>
    </div>
  );
};

export default NotificationsDesc;
