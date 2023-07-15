'use client'
import { usePathname} from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css"

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const currentRoute = usePathname()
  console.log(currentRoute)
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lamamia</Link>
      <div className={styles.links}>
        {links.map(link => 
        <Link key={link.id} href={link.url} className={currentRoute === link.url? "active-tag": ""}>{link.title}</Link>)}
        <button className={styles.logout} onClick={() =>  { console.log("logged out")}}>logout</button>
      </div>
    </div>  
  );
}
 
export default Navbar;