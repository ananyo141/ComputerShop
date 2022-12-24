import { IconType } from "react-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export type FooterIconType = {
  icon: IconType;
  link: string;
};

const FooterIcons: FooterIconType[] = [
  { link: "#!", icon: FaFacebookF },
  { link: "#!", icon: FaTwitter },
  { link: "#!", icon: FaGoogle },
  { link: "#!", icon: FaInstagram },
  { link: "#!", icon: FaLinkedinIn },
  { link: "#!", icon: FaGithub },
];

export default FooterIcons;
