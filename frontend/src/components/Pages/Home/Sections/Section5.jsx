import styles from "./Section5.module.scss";
import { ArrowButton } from "../../../buttons/Buttons";
import house1 from "../../../../assets/house1.jpg";
import house from "../../../../assets/house.jpg";
const Section5 = () => {
  return (
    <section className={styles.section_5}>
        <div className={styles.action}>
            <h1>Your Best Partner To Find New House</h1>
            <ArrowButton text="Get Started" path="search" />
        </div>
        <div className={styles.image_container_1}>
            <img src={house1} alt="house" />
        </div>
        <div className={styles.image_container_2}>
            <img src={house} alt="house" />
        </div>
    </section>
  )
}

export default Section5
