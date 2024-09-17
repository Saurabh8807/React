import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components//Contact"));
const Resto = lazy(() =>import("./components/Resto"));
const Body = lazy(() => import("./components/Body"));


const AppLayout = () => {
  return (
    <div className="app">
      {Header()}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Resto />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
