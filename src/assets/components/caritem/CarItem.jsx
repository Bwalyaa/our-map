const CarItem = ({marke, farbe, modell, produktionsjahr, ps}) => {
    return ( 
        <>
        <h1>Das ist ein CarItem Component</h1>
        <div>
            <h2>farbe:{farbe}</h2>
            <h2>Marke:{marke}</h2>
            <p>Model:{modell}</p>
            <p>Produktionsjahr:{produktionsjahr}</p>
            <p>Ps:{ps}</p>
        </div>
        </>
     );
}
 
export default CarItem;