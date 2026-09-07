
import './assets/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footerlinks">
        <a href="#">Confidentialité</a>
        <a href="#">Conditions</a>
        <a href="#">Publicités</a>
        <a href="#">Choix publicitaires</a>
        <a href="#">Cookies</a>
        <a href="#">Plus</a>
      </div>
      <p className="footercopyright">Meta © 2026</p>
    </div>
  );
}

export default Footer;


interface Footer {
  name: string;
  linkSrc?: string;
}

interface FooterProps {
  setFooterName: (name: string) => void;
  footerList: Footer[];
}

function Footer({ setFooterName, footerList }: FooterProps) {

  return <nav>
        {footerList.map((footer) => (
          
        ))}
      </nav>;
}

export default Footer;