function PriceDisplay({priceDisplay}) {

    const styles = {
        card:{
            width:"140px"
        },
        priceDisplay:{
            fontSize:"12px"
        }
    }
    return ( 
        <>
        { priceDisplay &&

            <div className="d-flex justify-content-center">
                { priceDisplay.map( ({symbol,percentageChange,price}) => {
                    return (

                        <div key={symbol} className="p-2 mx-1 bg-dark my-1 rounded d-none d-md-block" style={styles.card}>
                            <div className="d-flex flex-column text-center">
                                <small>
                                    <strong className="me-1">{symbol.toUpperCase()}</strong>
                                    <span 
                                        style={{...styles.priceDisplay, color:`${percentageChange>0?"green":"red"}`}}>{percentageChange}%</span> 
                                </small>
                                <small>${price.toFixed(3)}</small>
                            </div>
                        </div>
                    )
                } ) }

            </div>
        }
        
        </>
     );
}

export default PriceDisplay;