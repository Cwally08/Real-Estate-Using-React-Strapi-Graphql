import {ArrowButton} from "../../../buttons/Buttons";
import styles from "./Section2.module.scss";
import houses from "../../../../assets/11.jpg"
const Section2 = () => {
  return (
    <section className={styles.section_2}>
        {/* Image */}
      <div className={styles.section_2_image_container}>
        <img src={houses} alt="house" />
      </div>
      {/* Slogan */}
      <div className={styles.section_2_slogan}>
        <h1>
            Whether You're Buying, Selling or Renting, We Can Help You Move Forward.
        </h1>
      </div>
      {/* SELECTION */}
      <div className={styles.selection}>
        {/* BUY */}
        <div className={styles.buy}>
            <h3>Buy A Home</h3>
            <p>
                Find your place with and immersive photo experience and the most
                listings, including things you won't find anywhere else.
            </p>
            <ArrowButton text={"Search Houses"} path="buy" />
        </div>
         {/* Rent */}
         <div className={styles.rent}>
            <h3>Rent A Home</h3>
            <p>
                Find your place with and immersive photo experience and the most
                listings, including things you won't find anywhere else.
            </p>
            <ArrowButton text={"See Your Options"} path="rent" />
        </div>
        {/* SELL */}
        <div className={styles.sell}>
            <h3>Sell A Home</h3>
            <p>
                Find your place with and immersive photo experience and the most
                listings, including things you won't find anywhere else.
            </p>
            <ArrowButton text={"Use Filters"} path="search" />
        </div>
      </div>
    </section>
  )
}

export default Section2
