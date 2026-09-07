import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdApps, MdKeyboardArrowDown, MdNotifications } from "react-icons/md";
import logo from "../assets/img/logo.svg";

import type { NavBarItem } from "../data/data.tsx";
import avatar from "../assets/img/hero.png";

interface NavBarProps {
  setLink: (name: string) => void;
  navLinkList: NavBarItem[];
}

function NavBar({ setLink, navLinkList }: NavBarProps) {
  const [activeLink, setActiveLink] = useState(navLinkList[0]?.name ?? "");

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a className="navbar__logo" href="/" aria-label="Facebook">
          <img src={logo} alt="" />
        </a>
        <label className="navbar__search">
          <AiOutlineSearch className="navbar__searchIcon" />
          <input type="search" placeholder="Rechercher sur Facebook" />
        </label>
      </div>

      <div className="navbar__center">
        {navLinkList.map((navLink: NavBarItem) => {
          const Icon = navLink.icon;
          const isActive = activeLink === navLink.name;

          return (
            <button
              className={`navbar__option${isActive ? " navbar__option--active" : ""}`}
              key={navLink.name}
              type="button"
              title={navLink.name}
              aria-label={navLink.name}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                setActiveLink(navLink.name);
                setLink(navLink.name);
              }}
            >
              <Icon />
            </button>
          );
        })}
      </div>
      <div className="navbar__right">
        <button className="navbar__iconButton" type="button" aria-label="Menu">
          <MdApps />
        </button>
        <button className="navbar__iconButton" type="button" aria-label="Messenger">
          <FaFacebookMessenger />
        </button>
        <button className="navbar__iconButton" type="button" aria-label="Notifications">
          <MdNotifications />
          <span className="navbar__badge">9</span>
        </button>
        <button className="navbar__avatar" type="button" aria-label="Compte">
          <img src={avatar} alt="" />
          <span className="navbar__avatarCaret">
            <MdKeyboardArrowDown />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
