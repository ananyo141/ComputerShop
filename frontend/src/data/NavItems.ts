export type NavItemType = {
  name: string;
  path: string;
};

const NavItems: NavItemType[] = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/signin" },
  { name: "SignUp", path: "/signup" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default NavItems;
