import cars from "./assets/data/cars"
import CarList from './assets/components/carList/CarList'
import './App.css'

function App() {
//! hier ist vanilla js bereich
console.log(cars);

  return (
    //! hier ist jsx bereich // hier kommen auch react elemente rein
    <>
      <CarList cars={cars}/>
    </>
  )
}

export default App

