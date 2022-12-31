import Navbar from "../../navbar/Navbar";
import Card from "../../Cards/Cards";
import {useQuery} from "@apollo/client";
import styles from "./Rent.module.scss";
import {RENT_CARDS} from "../../../utils/Queries";

const Rent = () => {

    const {loading, data, error} = useQuery(RENT_CARDS);


  return ( 
    <main>
        <Navbar />
        <div className={styles.content}>
            <h1>Houses For Rent</h1>
            {/*Cards*/}
        <div className={styles.card}>
            {loading || error ? (<h1 styles={{color:"#333"}}>Loading...</h1>):
            (<div className={styles.cards}>{data.houses.data.map((house, index)=>(
                <Card 
                key={index}
                secondClass={styles.cards}
                info={{
                    id: house.id,
                    category: "Rent",
                    imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                    city:`${house.attributes.location.data.attributes.Location}`,
                    street:`${house.attributes.Street}`,
                    rooms:`${house.attributes.Rooms}`,
                    bedrooms:`${house.attributes.Bedrooms}`,
                    bathrooms:`${house.attributes.Bathrooms}`,
                    shortAddress:`${house.attributes.Short_Address}`,
                    rent:`${house.attributes.Rent}`,
                }}
                showInfo={
                    {
                        price: false,
                        rent: true
                    }
                }
                />
            ))} </div>)}
        </div>
        </div>
    </main>
  )
}

export default Rent
