// routes.jsx

import { Home, Profile, Event, AboutUs } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Event",
    path: "/event",
    element: <Event />, // Correct reference to the Events component
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
  {
    name: "About Us",
    path: "/aboutus",
    element: <AboutUs />,
  },
];

export default routes;
