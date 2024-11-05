import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <hr className="my-6 border-gray-300" />
        <div className="text-center">
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            Copyright © {year} created by Hassan Nauman and Rayan Imran.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
