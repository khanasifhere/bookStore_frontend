import React from "react";
import Home from "./home/Home.jsx";
import {  Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";
// import ContactFull from "./Contact/ContactFull.jsx"
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={ <Courses /> }
          />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Contact" element={<ContactFull/>}/> */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
