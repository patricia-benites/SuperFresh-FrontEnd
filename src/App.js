import { Outlet } from "react-router-dom";
import { Announcement } from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const App = () => {
    return <div>
     <Navbar />
      <Announcement />
      <Outlet />
      <Footer />
    </div>;
  };
  
  export default App;