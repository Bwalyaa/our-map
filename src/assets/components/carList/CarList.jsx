import CarItem from "../caritem/CarItem";
import {v4 as uuidv4 } from "uuid"

const CarList = ({cars}) => {
    console.log(cars);
    return ( 
        <>
        {/* <div>
            <h2>farbe:{props.farbe}</h2>
            <h2>Marke:{props.marke}</h2>
            <p>Model:{props.modell}</p>
            <p>Produktionsjahr:{props.produktionsjahr}</p>
            <p>Ps:{props.ps}</p>
        </div> */}
        <h1>das ist ein carlist component</h1>


        {cars.map((car, index) => {
            
            <CarItem 
            key={index}
            Marke={car.marke}
            farbe={cars.farbe}
            modell={cars.modell}
            produktionsjahr={cars.produktionsjahr}
            ps={cars.ps}
            
            />
            
        })}
        
        </>
     );
}
 
export default CarList;