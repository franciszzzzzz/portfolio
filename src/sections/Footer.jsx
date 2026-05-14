import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
  {socialImgs.map((social, index) => {
    const Icon = social.icon;

    return (
      <a
        key={index}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <Icon size={20} />
      </a>
    );
  })}
</div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Francis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
