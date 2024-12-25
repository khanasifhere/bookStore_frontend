import React from "react";
import Home from "./home/Home.jsx";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";
// import { Router } from "express";
// import ContactFull from "./Contact/ContactFull.jsx"
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <BrowserRouter>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Course"
            element={<Courses />} 
          />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Contact" element={<ContactFull/>}/> */}
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
