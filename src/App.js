import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomLink from "./hooks/CustomLink";
import { Blogs } from "./Pages/Blogs";
import { Dashboard } from "./Pages/Dashboard";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Reviews } from "./Pages/Reviews";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="App">
      <button onClick={toggleMenu} className="hambar">
        |||
      </button>
      {/* navigation bar */}
      <nav className={openMenu ? "" : "hidden"}>
        <button onClick={toggleMenu} className="closeBtn">
          X
        </button>
        <div className="links ">
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/reviews">REVIEWS</CustomLink>
          <CustomLink to="/dashboard">DASHBOARD</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
        </div>
      </nav>

      {/* all the routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
