import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./components/HomeUI/Profile/Profile";
import Chats from "./pages/Chats/Chats";
import Notifications from "./pages/Notifications/Notifications";
import LikedPosts from "./pages/LikedPosts/LikedPosts";
import Github from "./pages/Github/Github";

function App() {
  return (
    <div className="overflow-hidden text-[#fafafa] p-4">
      {/* <Auth /> */}
      {/* <Home /> */}
      <Profile />
      {/* <Chats /> */}
      {/* <Notifications /> */}
      {/* <LikedPosts /> */}
      {/* <Github /> */}
    </div>
  );
}

export default App;
