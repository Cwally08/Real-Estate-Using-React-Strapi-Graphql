import styles from "./Section4.module.scss";
import house1 from "../../../../assets/111.jpg";

const Section4 = () => {
  return (
    <section className={styles.section_4}>
        {/*TITLE*/}
    <div className={styles.section_4_title}>
        <h1>Help People In Getting Their Dream House For More Than 10 Years</h1>
    </div>

    {/*CONTENT*/}
    <div className={styles.section_4_content}>
        {/* IMAGE CONTAINER */}
        <div className={styles.image_container}>
            <img src={house1} alt="house" />
        </div>
        {/*INFO*/}
        <div className={styles.info}>
            <p>Search and find your dream house at affordable prices, but with the
                best quality. Only available in CWMA!
            </p>

            <div className={styles.rows}>
                {/*Row1*/}
                <div className={styles.row_1}>
                    {/* FACT1 */}
                    <div className={styles.fact}>
                        <h2>10.234</h2>
                        <h3>Completed Houses</h3>
                    </div>
                    {/* FACT2 */}
                    <div className={styles.fact}>
                        <h2>10.234</h2>
                        <h3>Rented Houses</h3>
                    </div>
                </div>
                {/*Row2*/}
                <div className={styles.row_2}>
                    {/* FACT1 */}
                    <div className={styles.fact}>
                        <h2>10.234</h2>
                        <h3>Sold Houses</h3>
                    </div>
                    {/* FACT2 */}
                    <div className={styles.fact}>
                        <h2>10.234</h2>
                        <h3>Happy Client</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Section4
