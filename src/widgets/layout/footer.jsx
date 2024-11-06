import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Flex container to align sections */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 text-center md:text-left">
          {/* Brand and Description */}
          <div>
            <Typography variant="h6" className="font-semibold mb-2">
              Al-Asr Club
            </Typography>
            <Typography className="text-gray-400 max-w-xs leading-relaxed">
              Al-Asr Club is dedicated to fostering a supportive community, engaging in impactful activities, and promoting growth and well-being.
            </Typography>
          </div>

          {/* Social Icons */}
          <div>
            <Typography variant="h6" className="font-semibold mb-4">
              Follow Us
            </Typography>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <Typography variant="small" className="text-gray-500">
            © {year} Created by Hassan Nauman and Rayyan Imran.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/Footer.jsx";

export default Footer;
