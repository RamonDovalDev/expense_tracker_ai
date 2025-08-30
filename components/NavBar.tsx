import { checkUser } from "@/lib/checkUser";
import React from "react";

const NavBar = () => {
  const user = checkUser();
  return <div>NavBar</div>;
};

export default NavBar;
