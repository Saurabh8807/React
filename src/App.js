import React ,{lazy,Suspense, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
// import UserContext from "./utils/UserContext";
import UserContext  from "./utils/UserContext";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components//Contact"));
const Resto = lazy(() =>import("./components/Resto"));
const Body = lazy(() => import("./components/Body"));
const Cart = lazy(() => import("./components/Cart"));


const AppLayout = () => {
  const obj = {
    name:"w",
    age:2
  }

  const [ userName , setUserName ] = useState("")
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName,userName}}>
        <div className="app">
          {/* {Header(obj)} */}
          <Header/>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

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
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
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
