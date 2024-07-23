import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./components/HomeUI/Profile/Profile";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className="overflow-hidden text-[#fafafa] p-4">
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
