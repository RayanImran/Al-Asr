// routes.jsx

import { Home, MembersList, Event, MediaResponse, AboutUs, FAQs, ContactUs } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Members List",
    path: "/members-list",
    element: <MembersList />,
  },
  {
    name: "Event",
    path: "/event",
    element: <Event />,
  },
  {
    name: "Media Response",
    path: "/media-response",
    element: <MediaResponse />,
  },
  {
    name: "About Us",
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    name: "FAQs",
    path: "/faqs",
    element: <FAQs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    element: <ContactUs />,
  },
];

export default routes;
