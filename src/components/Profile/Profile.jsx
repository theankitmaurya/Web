import React from 'react'
import LeftProfilePage from '../LeftProfilePage/LeftProfilePage';
import ProfileCard from '../ProfileCard/ProfileCard';
import Posts from '../Posts/Posts';
import NavIcons from '../NavIcons/NavIcons';
import Followers from '../RecentActivity/Followers';
import LogOut from '../LogOut/LogOut';
import Followed from '../Followed/Followed';
import Requests from '../Requests/Requests';

const Profile = () => {
  return (
    <div className='relative grid-cols-[20rem_auto_20rem] grid gap-4'>
      <LeftProfilePage />

      <div className="flex flex-col gap-4">
        <NavIcons />
        <ProfileCard />
        <Posts />
      </div>

      <div className="flex flex-col gap-4">
      <LogOut />
      <Followers />
      <Followed />
      <Requests />
      </div>
    </div>
  )
}

export default Profile;
