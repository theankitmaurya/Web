import React from "react";
import NotificationsHeader from "../../components/NotificationsUI/NotificationsHeader/NotificationsHeader";
import NotificationsType from "../../components/NotificationsUI/NotificationsType/NotificationsType";
import NotificationsDesc from "../../components/NotificationsUI/NotificationsDesc/NotificationsDesc";

const Notifications = () => {
  return (
    <div className="flex-col ml-[400px] mt-[72px] items-center justify-center bg-grey py-3 px-2 rounded-2xl w-1/2">
      <NotificationsHeader />
      <NotificationsType />
      <NotificationsDesc />
    </div>
  );
};

export default Notifications;
