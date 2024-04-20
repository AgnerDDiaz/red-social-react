// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageInicio from "../pages/PageInicio";
import PageSearch from "../pages/PageSearch";
import PageLogin from "../pages/PageLogin";
import RecuperarPage from "../pages/RecuperarPage";
import PageRegistrarse from "../pages/PageRegistrarse";


function Routers() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<PageLogin />} />
          <Route path="/PageRegistrarse" element={<PageRegistrarse />} />
          <Route path="/PageInicio" element={<PageInicio />} />
          <Route path="/PageSearch" element={<PageSearch />} />
          <Route path="/RecuperarPage" element={<RecuperarPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;