import React from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize cursor-pointer"
          onClick={() => {
            if (path) navigate(path);
          }}
        >
          <div className="flex items-center gap-1 p-1 font-bold">
            {icon &&
              React.createElement(icon, {
                className: "w-[18px] h-[18px] opacity-75 mr-1",
              })}
            {name}
          </div>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="fixed top-0 left-0 w-full z-50 p-3 bg-opacity-20 rounded-xl">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-lg">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          {action && React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Al-Asr by Abu Masood",
  action: null,
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      icon: PropTypes.elementType,
    })
  ).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
