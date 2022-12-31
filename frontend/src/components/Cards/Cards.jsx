import styles from './Cards.module.scss';

import { BsDoorOpenFill} from "react-icons/bs";
import {IoIosBed} from "react-icons/io";
import {IoLocationSharp} from "react-icons/io5";
import {FaBath} from "react-icons/fa";

import house1 from "../../assets/123.jpg";
import { Link } from "react-router-dom";

const Cards = ({ info, showInfo, secondClass }) => {

    const convertPrice = (price) => {
        if(price >=1000 && price<999999) return `${price/1000}k `;
        if(price>=1000000) return `${price/1000000}m `;
        return price;
    };

    const convertRent = (rent) => {
        if(rent>=1000) return `${rent/1000}k `;
        return rent;
    };


  return (
    <div className={`${styles.card_container} ${secondClass}`}>
      <div className={styles.image_container}>
        <div className={styles.image_buy_btn}>
            <Link to="/">{info.category}</Link>
        </div>
        <img src={info.imageSource} alt="houses" />
        {/* CITY */}
        <h3>{info.city}</h3>
        <h4>
            <p className={styles.neighborhood}>{info.neighborhood}</p>
            <p className={styles.street}>{info.street}</p>
        </h4>
        {/* ROOMS ETC */}
        <div className={styles.info}>
            <div className={styles.row1}>
                <div className={styles.rooms}>
                    <BsDoorOpenFill />
                    <span>{`${info.rooms} Rooms`}</span>
                </div>
                {/* BEDROOMS */}
                <div className={styles.bedrooms}>
                    <IoIosBed />
                    <span>{`${info.bedrooms} Bedrooms`}</span>
                </div>
            </div>
            {/*ROW*/}
            <div className={styles.row2}>
                {/*BATHROOMS*/}
            <div className={styles.bathrooms}>
                <FaBath />
                <span>{`${info.bathrooms} Bathrooms`}</span>
            </div>
            {/* Short Address */}
            <div className={styles.shortAddress}>
                <IoLocationSharp />
                <span>{`${info.shortAddress}`}</span>
            </div>
            </div>
        </div>
        <div className={styles.card_buy}>
            {/*PRICES*/}
            <div className={styles.prices}>
                <h2 style={showInfo.price ? {}:{display: "none"}}>{`₱${convertPrice(info.price)}`}</h2>
                <h2 style={showInfo.rent ? {}:{display: "none"}}>{`₱${convertRent(info.rent)}`}</h2>
            </div>
            {/* SEE MORE BUTTON */}
            <div className={styles.card_btn}>
                <Link to={`/property/${info.id}`}>See More</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

Cards.defaultProps = {
    info: {
        id: undefined,
        imageSource: house1,
        category: "Buy",
        city: "City",
        neighborhood: "Neighborhood",
        street: "Street",
        rooms: 9,
        bedrooms: 7,
        bathrooms: 2,
        shortAddress: "Rizal",
        price: 500000,
        rent: 0,
    },
    showInfo: {
        price: true,
        rent: false,
    },
    secondClass: "undefined",
};
export default Cards
