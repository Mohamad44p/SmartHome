import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Loader from "./components/Loaders/Loader";
import { Toaster } from "sonner";
import Notification from "./components/shared/Notification";

const LazyRooms = React.lazy(() => import("./components/Rooms/Rooms"));
const LazyAbout = React.lazy(() => import("./pages/AboutUspage"));
const LazyService = React.lazy(() => import("./pages/ServicePage"));
const LazyHomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="w-full max-w-7xl mx-auto h-[50vh] flex justify-center items-center mt-24">
                  <Loader />
                </div>
              }
            >
              <LazyHomePage />
            </Suspense>
          }
        />
        <Route
          path="/Rooms"
          element={
            <Suspense
              fallback={
                <div className="w-full max-w-7xl mx-auto h-[50vh] flex justify-center items-center mt-24">
                  <Loader />
                </div>
              }
            >
              <LazyRooms />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <div className="w-full max-w-7xl mx-auto flex justify-center items-center mt-24">
                  <Loader />
                </div>
              }
            >
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path="/Services"
          element={
            <Suspense
              fallback={
                <div className="w-full max-w-7xl mx-auto flex justify-center items-center mt-24">
                  <Loader />
                </div>
              }
            >
              <LazyService />
            </Suspense>
          }
        />
      </Routes>
      <Notification />
      <Toaster />
    </Router>
  );
}

export default App;
