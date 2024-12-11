"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
