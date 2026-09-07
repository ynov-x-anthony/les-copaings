import { useEffect, useState } from "react";
import navBarList from "../data/data.tsx";

interface Page {
  name: string;
  linkSrc?: string;
}

interface NavBarProps {
  setLink: (name: string) => void;
  navLinkList: Page[];
}

function NavBar({ setLink, navLinkList }: NavBarProps) {
    const [activeLink, setActiveLink] = useState<string>("");
    return (
    <nav className="navbar">
    {navLinkList.map((navLink: Page) => (
        <button
        key={navLink.name}
        onClick={() => { 
        setLink(navLink.name)}
        }>
        {navLink.name}
        </button>
    ))}
    <data />
    </nav>
    
    )
}

export default NavBar;