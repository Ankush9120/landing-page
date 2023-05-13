import KamunityImage from "../assets/logo.png";
import LightKamunityImage from "../assets/lightLogo.png";

import Email from "../assets/images/sec6/Email";
import Facebook from "../assets/images/sec6/Facebook";
import Twitter from "../assets/images/sec6/Twitter";
import Linkdin from "../assets/images/sec6/Linkdin";
import Instagram from "../assets/images/sec6/Instagram";

const Footer = () => {
  return (
    <footer className="content">
      <ul className="ul1">
        <li>
          <img src={KamunityImage} alt="Kamunity" />
          <img hidden src={LightKamunityImage} alt="Kamunity" />
        </li>
        <li className="head">Kamunity.io</li>
        <li>
          <p>The one-stop-shop for all</p>
          <p>consumer convenience</p>
        </li>
        <li className="handles">
          <Facebook />
          <Twitter />
          <Linkdin />
          <Instagram />
        </li>
      </ul>
      <ul className="ul2">
        <li className="head">Features</li>
        <li>Transactions</li>
        <li>Holdings</li>
        <li>Insights</li>
        <li>Forums</li>
        <li>Offers</li>
      </ul>
      <ul className="ul3">
        <li className="head">Company</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <ul className="ul4">
        <li className="head">Keep me posted</li>
        <li>
          <p>
            Be the first to know about the latest updates, news, and promotions
            from Kamunity. We will only send you the most relevant and useful
            information, and you can unsubscribe at any time. Just provide your
            email address below and we&apos;ll keep you posted.
          </p>
        </li>
        <li>
          <div className="searchBox">
            <Email />
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
