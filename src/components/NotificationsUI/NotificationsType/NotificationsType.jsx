import React from "react";

const NotificationsType = () => {
  return (
    <div className="flex items-center justify-around bg-hrColor p-2 rounded-lg mb-4">
      <div className="flex justify-center items-center gap-2 bg-grey px-6 py-2 rounded-lg cursor-pointer">
        <h3 className="text-blue">View All</h3>
        <span className="bg-yellow text-hrColor px-1 rounded-md">12</span>
      </div>
      <div className="flex justify-center items-center gap-2 px-6 py-2 rounded-lg cursor-pointer">
        <h3>Mentions</h3>
        <span className="bg-tagColor text-hrColor px-1 rounded-md">6</span>
      </div>
      <div className="flex justify-center items-center gap-2 px-6 py-2 rounded-lg cursor-pointer">
        <h3>Followers</h3>
        <span className="bg-tagColor text-hrColor px-1 rounded-md">4</span>
      </div>
      <div className="flex justify-center items-center gap-2 px-6 py-2 rounded-lg cursor-pointer">
        <h3>Invites</h3>
        <span className="bg-tagColor text-hrColor px-1 rounded-md">2</span>
      </div>
    </div>
  );
};

export default NotificationsType;
