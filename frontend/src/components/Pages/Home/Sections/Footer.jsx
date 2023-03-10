import styles from "./Footer.module.scss";
import {Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
        <ul className={styles.brand}>
            <li>
                <span>CWMA</span>
            </li>
            <li>
                <span>Our Location</span>
            </li>
            <li>
                <span>Call us: 09089726739</span>
            </li>
            <li>
                <div className={styles.socials}>
                    <Link to="/">
                        <AiOutlineFacebook />
                    </Link>
                    <Link to="/">
                        <AiOutlineInstagram />
                    </Link>
                    <Link to="/">
                        <AiOutlineTwitter />
                    </Link>
                </div>
            </li>
        </ul>

        <ul className={styles.services}>
            <li>
                <span>Services</span>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/about">Contact Us</Link>
            </li>
            <li>
                <Link to="/about">Our Team</Link>
            </li>
        </ul>

        <ul className={styles.support}>
            <li><span>Support</span></li>
            <li><Link to="/">FAQ's</Link></li>
            <li><Link to="/">Support Center</Link></li>
            <li><Link to="/">Help Center</Link></li>
        </ul>

        <ul className={styles.subscribe}>
            <li>
                <span>Subscribe</span>
            </li>
            <li>
                <p>Subscribe to get the latest and promo from us</p>
            </li>
            <li>
                <div className={styles.subscribe_input}>
                    <input type="text" placeholder="Email Address" />
                    <button>
                        <BsArrowRight/>
                    </button>
                </div>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
