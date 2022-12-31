import Navbar from "../../navbar/Navbar";
import styles from "./Buy.module.scss";
import Card from "../../Cards/Cards";
import {useQuery} from "@apollo/client";
import {BUY_CARDS} from "../../../utils/Queries";

const Buy = () => {
    const {loading, data, error} = useQuery(BUY_CARDS);
  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Sale</h1>
        {/*Cards*/}
        <div className={styles.card}>
            {loading || error ? (<h1 styles={{color:"#333"}}>Loading...</h1>):
            (<div className={styles.cards}>{data.houses.data.map((house, index)=>(
                <Card 
                key={index}
                secondClass={styles.cards}
                info={{
                    id: house.id,
                    category: "Buy",
                    imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                    city:`${house.attributes.location.data.attributes.Location}`,
                    street:`${house.attributes.Street}`,
                    rooms:`${house.attributes.Rooms}`,
                    bedrooms:`${house.attributes.Bedrooms}`,
                    bathrooms:`${house.attributes.Bathrooms}`,
                    shortAddress:`${house.attributes.Short_Address}`,
                    price:`${house.attributes.Price}`,
                }}
                />
            ))} </div>)}
        </div>
      </div>
    </main>
  )
}

export default Buy;
