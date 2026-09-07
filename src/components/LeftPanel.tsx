import { FaUserCircle } from "react-icons/fa";
import { SiMetaai } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { IoBookmark } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaClapperboard } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { CgFeed } from "react-icons/cg";
import { LuCandy } from "react-icons/lu";
import { FaFacebookMessenger } from "react-icons/fa";

export default function LeftPanel() {



  return (
    <div className="LeftPanel">

      <div className="LeftPanel__content">

        <div className="LeftPanel__content__user">
          <h4> <FaUserCircle /> Anthony Gorski</h4>
        </div>

        <div className="LeftPanel__content__MetaAI">
          <h4> <SiMetaai /> Meta AI</h4>
        </div>

        <div className="LeftPanel__content__friends">
          <h4> <FaUserFriends /> Ami(e)s</h4>
        </div>

        <div className="LeftPanel__content__souvenirs">
          <h4> <GiBackwardTime /> Souvenirs</h4>
        </div>

        <div className="LeftPanel__content__saved">
          <h4> <IoBookmark /> Enregistrements</h4>
        </div>

        <div className="LeftPanel__content__groups">
          <h4> <MdGroups /> Groupes</h4>
        </div>

        <div className="LeftPanel__content__reels">
          <h4> <FaClapperboard /> Reels</h4>
        </div>

        <div className="LeftPanel__content__marketplace">
          <h4> <FaStore /> Marketplace</h4>
        </div>

        <div className="LeftPanel__content__feed">
          <h4> <CgFeed /> Fils</h4>
        </div>
      
      </div>

      <hr />

      <div className="LeftPanel__raccourcis">

        <div className="LeftPanel__raccourcis__title">
        <h3>Vos raccourcis</h3>
        </div>

        <div className="LeftPanel__raccourcis__candy">
          <h4> <LuCandy /> Candy Crush Saga</h4>
        </div>

        <div className="LeftPanel__raccourcis__messenger">
          <h4> <FaFacebookMessenger /> Messenger</h4>
        </div>

      </div>

    </div>
  );
}