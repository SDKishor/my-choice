import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Pages/About";
import { Blogs } from "./Pages/Blogs";
import { Dashboard } from "./Pages/Dashboard";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Reviews } from "./Pages/Reviews";

function App() {
  return (
    <div className="App">
      {/* navigation bar */}
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/">REVIEWS</Link>
        <Link to="/">DASHBOARD</Link>
        <Link to="/">BLOGS</Link>
        <Link to="/">ABOUT</Link>
      </nav>

      {/* all the routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
