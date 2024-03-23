import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { HomePage } from "./components/shared/HomePage";
import Loader from "./components/Loaders/Loader";

const LazyRooms = React.lazy(() => import("./components/Rooms/Rooms"));
const LazyAbout = React.lazy(() => import("./components/shared/About"));
const LazyService = React.lazy(() => import("./components/shared/Service"));
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
    </Router>
  );
}

export default App;
