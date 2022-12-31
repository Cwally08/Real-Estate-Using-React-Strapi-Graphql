import styles from "./Section1.module.scss";
import Navbar from "../../../navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import house from "../../../../assets/123.jpg";


const Section1 = () => {
  const [price, setPrice] = useState("<1m");
  const [location, setLocation] = useState("");

  return (
    <section className={styles.section_1}>
      {/* NAVBAR */}
      <div className={styles.Navbar}>
        <Navbar BurgerColour={"whitesmoke"} />
      </div>

      {/* BACKGROUND IMAGES */}
      <div className={styles.img}></div>

      {/* SECTION 1 CONTENT */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>Let us Guide you Home</h1>
          <p>
            Search and find your dream house at affordable prices , but with the
            best quality. Only available in CWMA
          </p>

          {/* SEARCH BOX */}
          <div className={styles.search_container}>
            {/* LOCATION */}
            <div className={styles.location_container}>
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            {/* PRICE RANGE */}
            <div className={styles.price_container}>
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              >
                <option value="<1M">{`<1M`}</option>
                <option value="1M-2M">1M-2M</option>
                <option value="2M-4M">2M-4M</option>
                <option value=">5M">{`>5M`}</option>
              </select>
            </div>

            {/* SEARCH BUTTON */}
            <button className={styles.btn_search}>
              <Link to="search">Search</Link>
            </button>
          </div>
        </div>

        {/* BUILDING IMAGE */}
        <div className={styles.slogan_image}>
          <img src={house} alt="building" />
        </div>
      </div>
    </section>
  );
};

export default Section1;