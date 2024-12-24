import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./Contact/Contact";
import ContactFull from "./Contact/contactFull";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="https://book-store-frontend-three-peach.vercel.app" element={<Home />} />
          <Route
            path="https://book-store-frontend-three-peach.vercel.app/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="https://book-store-frontend-three-peach.vercel.app/signup" element={<Signup />} />
          <Route path="https://book-store-frontend-three-peach.vercel.app/Contact" element={<ContactFull/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
