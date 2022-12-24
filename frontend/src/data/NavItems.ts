type NavItem = {
  name: string;
  path: string;
};

const NavItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Sign In", path: "/signin" },
  { name: "Sign Up", path: "/signup" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default NavItems;
