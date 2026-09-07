import type { IconType } from "react-icons";
import {
  MdHome,
  MdOutlineOndemandVideo,
  MdOutlinePeople,
  MdOutlineStorefront,
  MdOutlineAccountCircle,
} from "react-icons/md";

export interface NavBarItem {
  name: string;
  icon: IconType;
  linkSrc?: string;
}

const navBarList: NavBarItem[] = [
  { name: "Accueil", icon: MdHome, linkSrc: "" },
  { name: "Vidéo", icon: MdOutlineOndemandVideo, linkSrc: "" },
  { name: "Amis", icon: MdOutlinePeople, linkSrc: "" },
  { name: "Marketplace", icon: MdOutlineStorefront, linkSrc: "" },
  { name: "Groupes", icon: MdOutlineAccountCircle, linkSrc: "" },
];

export default navBarList;
